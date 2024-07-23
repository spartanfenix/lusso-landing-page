import React, { useEffect, useState, useRef } from "react";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { esES } from "@mui/x-date-pickers/locales";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SendIcon from "@mui/icons-material/Send";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/es";
import weekday from "dayjs/plugin/weekday";
import emailjs from "@emailjs/browser";

dayjs.locale("es");
dayjs.extend(weekday);

const FormContactS = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    place: "",
    eventDate: null as Dayjs | null,
    services: {
      lusso: false,
      viagio: false,
      eleva: false,
    },
    information: "",
  });

  const emailjs_service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailjs_template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailjs_public_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [cleared, setCleared] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setFormValues({
        ...formValues,
        services: {
          ...formValues.services,
          [name]: checked,
        },
      });
      setCheckboxError(false);
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    setFormValues({
      ...formValues,
      eventDate: date,
    });
  };

  const sendEmail = () => {
    if (formRef.current) {
      const selectedServices = Object.entries(formValues.services)
        .filter(([, value]) => value)
        .map(([key]) => key)
        .join(", ");

      const servicesField = formRef.current.elements.namedItem("services");
      if (servicesField) {
        (servicesField as HTMLInputElement).value = selectedServices;
      }

      const eventDateField = formRef.current.elements.namedItem("eventDate");
      if (eventDateField && formValues.eventDate) {
        const formattedDate = formValues.eventDate
          .locale("es")
          .format("DD [de] MMMM [de] YYYY");
        (eventDateField as HTMLInputElement).value = formattedDate;
      }

      emailjs
        .sendForm(
          emailjs_service_id,
          emailjs_template_id,
          formRef.current,
          emailjs_public_key
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { services } = formValues;
    const isAnyServiceChecked = Object.values(services).some((value) => value);

    if (!isAnyServiceChecked) {
      setCheckboxError(true);
      return;
    }

    console.log(formValues);
    sendEmail();
    setAlertOpen(true);
    setFormValues({
      name: "",
      phone: "",
      email: "",
      place: "",
      eventDate: null,
      services: {
        lusso: false,
        viagio: false,
        eleva: false,
      },
      information: "",
    });

    setTimeout(() => {
      setAlertOpen(false);
    }, 4500);
  };

  return (
    <Box
      component="form"
      ref={formRef}
      onSubmit={handleSubmit}
      sx={{
        maxWidth: "1000px",
        textAlign: "center",
        py: "2rem",
        px: "2rem",
        margin: "0 auto",
      }}
    >
      <FormControl>
        <Grid
          container
          spacing={2}
          columns={16}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={16} md={16} lg={16}>
            <TextField
              fullWidth
              label="Nombre"
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={16} md={16} lg={16}>
            <TextField
              fullWidth
              label="WhatsApp"
              type="tel"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={16} md={16} lg={16}>
            <TextField
              fullWidth
              label="Correo"
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={16} md={8} lg={8}>
            <TextField
              helperText="Ejemplo(Salón Los Girasoles, San Andres Cholula)"
              fullWidth
              label="Nombre y Ubicación del salón/evento"
              type="text"
              name="place"
              value={formValues.place}
              onChange={handleChange}
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={16} md={8} lg={8}>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              adapterLocale="es"
              localeText={
                esES.components.MuiLocalizationProvider.defaultProps.localeText
              }
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <DatePicker
                  sx={{ width: "100%" }}
                  value={formValues.eventDate}
                  onChange={handleDateChange}
                  slotProps={{
                    textField: {
                      helperText: "Por favor ingrese la fecha de su evento",
                      required: true,
                    },
                    field: {
                      clearable: true,
                      onClear: () => setCleared(true),
                    },
                  }}
                  slots={{ openPickerIcon: EventAvailableIcon }}
                  shouldDisableDate={(date) =>
                    dayjs(date).isBefore(dayjs().add(0, "day"))
                  }
                  name="eventDate"
                />
                {cleared && (
                  <Alert
                    sx={{ position: "absolute", bottom: -40, right: 120 }}
                    severity="success"
                  >
                    ¡Campo Fecha Vacio!
                  </Alert>
                )}
              </Box>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={16} md={8} lg={8}>
            <FormLabel id="demo-radio-buttons-group-label">
              ¿Qué servicio requieres?
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    name="lusso"
                    checked={formValues.services.lusso}
                    onChange={handleChange}
                    sx={{
                      color: "black",
                      "&.Mui-checked": {
                        color: "black",
                      },
                    }}
                  />
                }
                label="Lusso Band"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="viagio"
                    checked={formValues.services.viagio}
                    onChange={handleChange}
                    sx={{
                      color: "black",
                      "&.Mui-checked": {
                        color: "black",
                      },
                    }}
                  />
                }
                label="Viagio"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="eleva"
                    checked={formValues.services.eleva}
                    onChange={handleChange}
                    sx={{
                      color: "black",
                      "&.Mui-checked": {
                        color: "black",
                      },
                    }}
                  />
                }
                label="Eleva"
              />
            </FormGroup>
            {checkboxError && (
              <Alert severity="error" sx={{ mt: 2 }}>
                Debes seleccionar al menos un servicio.
              </Alert>
            )}
          </Grid>
          <Grid item xs={16} md={8} lg={8}>
            <TextField
              fullWidth
              label="Información adicional"
              type="text"
              name="information"
              value={formValues.information}
              onChange={handleChange}
              multiline
              rows={5}
              variant="outlined"
            />
          </Grid>
          {/* Campo oculto para los servicios */}
          <input type="hidden" name="services" value="" />
          <Grid item xs={16} md={16} lg={16}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                width: "100%",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                sx={{
                  width: { xs: "100%", md: "auto" },
                }}
                style={{ backgroundColor: "#030303" }}
              >
                ENVIAR
              </Button>
            </Box>
          </Grid>
        </Grid>
      </FormControl>
      {alertOpen && (
        <Alert variant="filled" severity="success" sx={{ my: 2 }}>
          Gracias por escogernos, en breve nos comunicaremos con usted.
        </Alert>
      )}
    </Box>
  );
};

export default FormContactS;

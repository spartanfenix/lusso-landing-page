import {
  Alert,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { esES } from "@mui/x-date-pickers/locales";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const FormContact = () => {
  const [cleared, setCleared] = useState<boolean>(false);

  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <Box
      component="form"
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
              id="outlined-basic"
              label="Nombre"
              type="text"
              name="name"
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={16} md={16} lg={16}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Telefono"
              type="tel"
              name="phone"
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={16} md={16} lg={16}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Correo"
              type="email"
              name="email"
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={16} md={8} lg={8}>
            <TextField
              helperText="Por favor ingrese el lugar de su evento"
              fullWidth
              id="outlined-basic"
              label="Lugar de evento"
              type="text"
              name="place"
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={16} md={8} lg={8}>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
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
                  slotProps={{
                    textField: {
                      helperText: "Por favor ingrese la fecha de su evento",
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
                />

                {cleared && (
                  <Alert
                    sx={{ position: "absolute", bottom: 0, right: 0 }}
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
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="lusso"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="lusso"
                control={<Radio />}
                label="Lusso Band"
              />
              <FormControlLabel
                value="viagio"
                control={<Radio />}
                label="Viagio"
              />
              <FormControlLabel
                value="eleva"
                control={<Radio />}
                label="Eleva"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={16} md={8} lg={8}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Información adicional"
              type="text"
              name="information"
              multiline
              rows={5}
            />
          </Grid>
          <Grid item xs={16} md={16} lg={16}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                width: "100%",
              }}
            >
              <Button
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
    </Box>
  );
};

export default FormContact;

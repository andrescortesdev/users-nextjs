import Layout from "../../components/Layout";
import {
    Button,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField
} from "@mui/material";
import {ChangeEvent, FormEvent, useState} from "react";
import {User} from "../../interfaces/User";
import {array} from "prop-types";
import {useRouter} from "next/router";

export default function createUser() {

    const router = useRouter();

    const [user, setUser] = useState({
        names: "",
        lastnames: "",
        email: "",
        gender: "",
        img_profile: "",
        date_birth: "",
    });
    const createUser = async (user: User) => {
        await fetch('https://restful-api-projects.herokuapp.com/api/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user);
        try {
            await createUser(user);
            router.push('/users');
        } catch (e) {

        }
    }
    const [gender, setGender] = useState('');
    ;
    const handleChange = ({
                              target: {name, value},
                          }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setUser({...user, [name]: value});
    return (
        <Layout>
            <Container style={{marginTop: "5rem"}}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <TextField name="names" id="outlined-basic" label="Nombres" variant="filled" onChange={handleChange}/>

                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <TextField name="lastnames" id="outlined-basic" label="Apellidos" variant="filled" onChange={handleChange}/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <TextField name="email" id="outlined-basic" label="Correo electronico"
                                           variant="filled" onChange={handleChange}/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <TextField name="img_profile" id="outlined-basic" label="Enlace imagen de perfil"
                                           variant="filled" onChange={handleChange}/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-standard-label">Genero</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="gender"
                                    value={gender}
                                    onChange={handleChange}
                                    label="gender"
                                    variant="filled"
                                    name="gender"
                                >
                                    <MenuItem value="">
                                        <em>Seleccione su genero</em>
                                    </MenuItem>
                                    <MenuItem value="Masculino">Masculino</MenuItem>
                                    <MenuItem value="Femenino">Femenino</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <TextField type="date" name="date_birth" id="outlined-basic"
                                           label="Fecha de nacimiento"
                                           onChange={handleChange}
                                           variant="filled" required/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth onClick={handleSubmit}>Guardar</Button>
                        </Grid>
                    </Grid>
                </form>


            </Container>
        </Layout>
    )
}
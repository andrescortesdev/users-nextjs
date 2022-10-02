import Layout from "../../components/Layout";
import {User} from "../../interfaces/User"
import {Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Image from "next/image";

interface Props {
    users: User[]
}

export default function index({users}: Props) {

    return (
        <Layout>
            <Container style={{ marginTop: "5rem"}}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>FOTO</TableCell>
                                <TableCell>NOMBRES</TableCell>
                                <TableCell>APELLIDOS</TableCell>
                                <TableCell>CORREO</TableCell>
                                <TableCell>GENERO</TableCell>
                                <TableCell>EDAD</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { users.map((user) => (
                                <TableRow key={user.id}>

                                    <TableCell>{user.id}</TableCell>
                                    <TableCell> <Image src={user.img_profile} width={40} height={40}/>  </TableCell>
                                    <TableCell>{user.names}</TableCell>
                                    <TableCell>{user.lastnames}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.gender}</TableCell>
                                    <TableCell>{user.date_birth}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Layout>
    )
}
export const getServerSideProps = async () => {

    const res = await fetch("https://restful-api-projects.herokuapp.com/api/users");
    const users = await res.json();
    console.log(users);
    return {
        props: {
            users: users
        }
    }
}
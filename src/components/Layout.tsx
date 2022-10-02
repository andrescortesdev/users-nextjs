import {
    AppBar,
    Button,
    Container,
    Icon,
    IconButton,
    Toolbar,
    Typography,
    Menu,
    ThemeProvider,
    Box, MenuItem, MenuList, ButtonGroup
} from "@mui/material";
import {useRouter} from "next/router";

export default function Layout({children}: { children: JSX.Element | JSX.Element[] }) {
    const router = useRouter();
    return (
        <div>
            <AppBar position="fixed">
                <Container>
                    <Toolbar disableGutters>
                        <ButtonGroup
                            disableElevation
                            variant="contained"
                            aria-label="Disabled elevation buttons"
                        >
                            <Button onClick={() => router.push('/users/')}>Listado</Button>
                            <Button onClick={() => router.push('/users/create')}>Crear</Button>
                        </ButtonGroup>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container>
                {children}
            </Container>
        </div>
    )
}



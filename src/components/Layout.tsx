import {AppBar, Button, Container, Icon, IconButton, Toolbar, Typography} from "@mui/material";


export default function Layout({children}: { children: JSX.Element | JSX.Element[] }) {
    return (
        <div>
            <AppBar>
                <Container>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="warning"
                            aria-label="menu"
                        >
                        </IconButton>
                        <Typography>
                            AndresCortesDev
                        </Typography>
                        <Button>Testsds</Button>

                    </Toolbar>
                </Container>
            </AppBar>
            <Container>
                {children}
            </Container>
        </div>
    )
}



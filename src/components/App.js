import { useState, useEffect } from "react";
import { Container, Grid, Box } from "@mui/material";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import "../css/card.css";

const URL = "https://api.genshin.dev/characters/";

function App() {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  const URLCharacter = URL + character[0];
  useEffect(() => {
    fetch(URLCharacter)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
      });
  }, []);

  const img = URLCharacter + "/card";
  console.log(img);

  return (
    <div className="App">
      <h1>Genshin Impact</h1>
      <h2>Characters</h2>
      <Container>
        <Grid container spacing={0}>
          <div className="characters">
            <Grid item xs={12}>
              <Box>
                <Grid container spacing={3}>
                  {characters.map((character) => (
                    <Grid item xs={12} sm={6} md={3}>
                      <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="140"
                            image={URL + character + "/card"}
                            alt={character}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {character}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Lizards are a widespread group of squamate
                              reptiles, with over 6,000 species, ranging across
                              all continents except Antarctica
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </div>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

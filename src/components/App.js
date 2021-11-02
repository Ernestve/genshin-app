import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import "../css/card.css";

const URL = "https://api.genshin.dev/characters/";

function InfoCharacter(props) {
  const [character, setCharacter] = useState([]);
  const URLCharacter = URL + props.character;
  useEffect(() => {
    fetch(URLCharacter)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
      });
  }, [URLCharacter]);
  return (
    <>
      <CardMedia
        component="img"
        height="360"
        image={URLCharacter + "/card"}
        alt={character.name}
      />
      <CardContent sx={{ height: 200 }}>
        <Typography gutterBottom variant="h5" component="div">
          {character.name}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          {character.vision}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {character.description}
        </Typography>
      </CardContent>
    </>
  );
}

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Genshin Impact</h1>
      <h2>Characters</h2>
      <Container>
        <Grid container spacing={2}>
          {characters.map((character) => (
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ maxWidth: 320 }}>
                <CardActionArea>
                  <InfoCharacter character={character} />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;

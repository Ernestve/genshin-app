import { useState, useEffect } from "react";
import { Container, Grid, Box } from "@mui/material";
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

  const URLCharacter = URL + characters[3];
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
                    <Grid item xs={6} sm={3} md={2}>
                      <div className="character-card" key={character}>
                        <h3 className="character-card__name">{character}</h3>
                        <img
                          className="character-card__image"
                          src={URL + character + "/card"}
                          alt={character}
                        />
                      </div>
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

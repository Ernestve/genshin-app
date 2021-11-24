import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { Card, CardActionArea } from "@mui/material";
import InfoCharacter from "./InfoCharacter.jsx";
import "../css/card.css";
import SearchAppBar from "./AppBar.jsx";

const URL = "https://api.genshin.dev/characters/";

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
      <SearchAppBar />
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

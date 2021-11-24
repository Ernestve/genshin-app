import { useState, useEffect } from "react";
import { CardMedia, CardContent, Typography } from "@mui/material";

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

export default InfoCharacter;

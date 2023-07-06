import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Card from "../common/Card";

const PlayerDetails = ({ selectedPlayer, playerExitHandler }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={0.5}>
          <IconButton onClick={playerExitHandler}>
            <svg width="25px" height="25px" viewBox="0 0 25 25">
              <path
                style={{ fill: "black" }}
                d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
                data-name="Left"
              />
            </svg>
          </IconButton>
        </Grid>
        <Grid item xs={9}>
          <Box sx={{ pb: 3 }}>
            <Typography variant="h4">{selectedPlayer.name}</Typography>
          </Box>
        </Grid>
      </Grid>
      <Divider />

      <Box sx={{ display: "flex", my: 2 }}>
        <Card heading="Goals" style={{ flex: 1, fontSize: "30px" }}>
          {selectedPlayer.stats.goals}
        </Card>
        <Card heading="Assists" style={{ flex: 1, fontSize: "30px" }}>
          {selectedPlayer.stats.assists}
        </Card>
        <Card heading="Red Cards" style={{ flex: 1, fontSize: "30px" }}>
          {selectedPlayer.stats.redCards}
        </Card>
        <Card heading="Yellow Cards" style={{ flex: 1, fontSize: "30px" }}>
          {selectedPlayer.stats.yellowCards}
        </Card>
      </Box>
      <Divider />

      <Box sx={{ pt: 2 }}>
        <Typography variant="caption">
          {selectedPlayer.name} is a Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Magni sequi veritatis quam soluta dolorem omnis
          ullam laborum alias dolorum deleniti! Pariatur reprehenderit fugit,
          sed dolorem reiciendis quaerat. Excepturi, delectus nesciunt? Placeat
          vel ducimus doloremque reprehenderit? Sunt architecto nesciunt itaque
          sit quis labore ut voluptatem numquam velit perspiciatis libero, error
          inventore ex eos laboriosam, amet consequuntur, veritatis cumque
          doloremque iste in. Error perspiciatis asperiores nesciunt suscipit
          vel natus temporibus nam non voluptates incidunt quaerat, eligendi
          ullam, sunt minus, ratione magnam perferendis maiores. Magni
          repudiandae amet magnam sint mollitia dolore iusto totam? Ab adipisci
          vitae vero sunt, vel saepe qui quia natus dolorem recusandae aperiam
          quis itaque eum illum in consequuntur, neque voluptatibus assumenda
          excepturi officiis id repellat consequatur deleniti! Odio, sequi?
          Harum voluptas libero quia eos quod aut, voluptates perspiciatis
          reiciendis temporibus eveniet consequuntur recusandae consequatur
          delectus magnam explicabo? Hic officiis rem similique, molestiae
          blanditiis dolorum consequuntur! Reprehenderit blanditiis officiis ea.
          Excepturi cupiditate quo voluptates odit velit! Fuga molestiae vel
          numquam corporis similique ratione atque exercitationem dicta quia
          tempore quas voluptates omnis laboriosam nulla officiis commodi, animi
          aliquam hic, fugiat ab. Ex in velit optio sed saepe quia, quisquam
          repellendus cumque modi consequuntur culpa reprehenderit mollitia
          accusantium eius. Quasi modi ad deleniti quisquam, aut esse tempora
          tempore aliquid voluptas cumque. Deserunt! Tempore eum delectus
          reprehenderit. Laboriosam, possimus. Beatae ipsam nesciunt
          necessitatibus impedit hic, repellendus qui dolorem quibusdam
          obcaecati. Distinctio fugit suscipit dolorum est corrupti voluptate
          natus, expedita consequatur eius rerum mollitia. Illum, harum optio!
          Minus eius dicta aliquid illum officia dolore voluptatum perferendis
          laborum iure explicabo mollitia a reprehenderit ipsam quo soluta ipsum
          commodi, dolor optio nobis voluptate impedit. Velit, consectetur.
          Aperiam esse, aspernatur quae provident beatae amet? Et iste sequi
          expedita quam ipsam iure rem, quia, recusandae voluptates nostrum sint
          numquam quo repudiandae quibusdam autem dignissimos facilis tenetur id
          cum?
        </Typography>
      </Box>
    </>
  );
};

export default PlayerDetails;

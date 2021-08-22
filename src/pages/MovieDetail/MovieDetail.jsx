import { Box, Button, Container, FormControl, TextField, Typography } from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';
import React, { useEffect, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import ButtonLoading from '../../components/UI/ButtonLoading/ButtonLoading';
import useStyles from './MovieDetail.styles';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import CommentItem from '../../components/CommentItem/CommentItem';

let player = null;
function MovieDetail() {
  const classes = useStyles();
  const params = useParams();
  console.log(params);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (player) player.destroy();
    const playerDOM = document.getElementById('player');
    player = new Plyr(playerDOM);
    const videoSettings = {
      type: 'video',
      sources: [
        {
          src: 'bTqVqk7FSmY',
          provider: 'youtube',
        },
      ],
    };
    player.source = videoSettings;
  }, []);

  return (
    <div className={classes.root}>
      <Container>
        <Box display="flex" flexWrap="wrap">
          <img
            className={classes.poster}
            src="https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w342/jyqi5BkDoKKIA2WAoz3HBtRHld3.jpg"
            alt=""
          />
          <Box className={classes.detail}>
            <Typography variant="h3" className={classes.title}>
              Fate/stay night [Unlimited Blade Works]
            </Typography>
            <Box className={classes.review} display="flex" flexWrap="wrap" alignItems="center">
              <Typography variant="body1" className={classes.score}>
                4.9
              </Typography>
              <Box className={classes.release} display="flex" flexWrap="wrap" alignItems="center">
                <AccessTime fontSize="small" className={classes.iconTime} />
                <Typography variant="body1" className={classes.time}>
                  21/08/2021
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" className={classes.moreInfo}>
              Number of season: 0
            </Typography>
            <Typography variant="body2" className={classes.moreInfo}>
              Number of episode: 24
            </Typography>
            <Typography variant="body2" className={classes.moreInfo}>
              Duration: 24 minutes / episode
            </Typography>
          </Box>
        </Box>
        <Box className={classes.content}>
          <Box className={`${classes.section} ${classes.description}`} data-aos="fade-up">
            <Typography variant="body1" className={classes.descriptionContent}>
              The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters,
              through the use of the command seals they are given when they enter the war, command
              Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail
              War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer,
              she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of
              granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally
              enters the competition and ends up commanding a Servant of his own known as Saber. As
              they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary
              alliance as they challenge their opponents in the Holy Grail War.
            </Typography>
          </Box>
          <Box className={classes.section} data-aos="fade-up">
            <Typography variant="h5" color="primary" className={classes.subtitle}>
              Offical Trailer:
            </Typography>
            <div className={classes.playerWrapper}>
              <video id="player" playsInline controls />
            </div>
          </Box>
          <Box className={classes.section} data-aos="fade-up">
            <Typography variant="h5" color="primary" className={classes.subtitle}>
              Comment
            </Typography>
            <Box>
              <Box className={classes.commentBox}>
                <form>
                  <FormControl fullWidth>
                    <TextField
                      multiline
                      rows={4}
                      variant="filled"
                      placeholder="What do you thing?"
                      className={classes.inputComment}
                    />
                  </FormControl>
                </form>
                <Button variant="contained" color="primary" className={classes.btnPostComment}>
                  Post
                </Button>
              </Box>
              <ul>
                <li>
                  <CommentItem
                    loggedId="1"
                    userId="1"
                    avatar="https://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg"
                    name="Agustin Ortiz"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?"
                    createdAt="20m ago"
                  />
                </li>
                <li>
                  <CommentItem
                    avatar="https://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg"
                    name="Agustin Ortiz"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?"
                    createdAt="20m ago"
                  />
                </li>
                <li>
                  <CommentItem
                    avatar="https://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg"
                    name="Agustin Ortiz"
                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?"
                    createdAt="20m ago"
                  />
                </li>
              </ul>
            </Box>
            <ButtonLoading fullWidth={false} style={{ width: 200, margin: '0 auto' }}>
              Load more
            </ButtonLoading>
          </Box>
        </Box>
        <Box className={classes.suggestion} data-aos="fade-up"></Box>
      </Container>
    </div>
  );
}

export default MovieDetail;

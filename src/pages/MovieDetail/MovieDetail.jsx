import { Box, Container, Typography } from '@material-ui/core';
import { AccessTime } from '@material-ui/icons';
import React, { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import ButtonLoading from '../../components/UI/ButtonLoading/ButtonLoading';
import useStyles from './MovieDetail.styles';
// {
// 	id: 1,
// 	title: 'Fate/stay night [Unlimited Blade Works]',
// 	image:
// 		'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w342/jyqi5BkDoKKIA2WAoz3HBtRHld3.jpg',
// 	description:
// 		"The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
// 	genres: ['drama', 'roman', 'action'],
// },
function MovieDetail() {
  const classes = useStyles();
  const params = useParams();
  console.log(params);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.root}>
      <Container>
        <Box display="flex" flexWrap="wrap" marginBottom={5}>
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
        <Box marginBottom={2} className={classes.description} data-aos="fade-up">
          <Typography variant="body1" className={classes.content}>
            The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters,
            through the use of the command seals they are given when they enter the war, command
            Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail
            War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer,
            she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of
            granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters
            the competition and ends up commanding a Servant of his own known as Saber. As they find
            themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as
            they challenge their opponents in the Holy Grail War.
          </Typography>
        </Box>
        <Box marginBottom={2} className={classes.trailer} data-aos="fade-up">
          {/* trailer */}
        </Box>
        <Box marginBottom={2} className={classes.comment} data-aos="fade-up">
          {/* comment */}
          <ButtonLoading fullWidth={false} style={{ width: 200, margin: '0 auto' }}>
            Load more
          </ButtonLoading>
        </Box>
        <Box className={classes.suggestion} data-aos="fade-up"></Box>
      </Container>
    </div>
  );
}

export default MovieDetail;

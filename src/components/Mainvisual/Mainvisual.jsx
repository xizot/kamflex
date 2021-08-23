import { Box, Container, Typography } from '@material-ui/core';
import { YouTube } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import useStyles from './Mainvisual.styles';

const listMovie = [
  {
    id: 1,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image: 'https://wallpaperaccess.com/full/37951.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
  },
  {
    id: 2,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image: 'https://wallpaperaccess.com/full/37945.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
  },
  {
    id: 3,
    title: 'Transfomers: Cybertron War',
    image: 'https://wallpaperaccess.com/full/37949.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
  },
  {
    id: 4,
    title: 'MonsterVerse',
    image: 'https://wallpaperaccess.com/full/522306.jpg',
    description:
      'The MonsterVerse is a term used to identify the Godzilla and King Kong crossover film series produced by Legendary Pictures that began in 2014',
    genres: ['drama', 'roman', 'action'],
  },
];

function Mainvisual() {
  const classes = useStyles();
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    customPaging: function (i) {
      return (
        <div className={classes.sliderPaging}>
          <Typography variant="body1" className={classes.sliderPagingItem}>
            {`0${i + 1}`.slice(-2)}
          </Typography>
        </div>
      );
    },
  };
  return (
    <Box className={classes.root}>
      <Slider {...settings}>
        {listMovie.map((movie, index) => (
          <div className={classes.sliderItem} key={index}>
            <div className={classes.sliderImage}>
              <img src={movie.image} alt="" />
            </div>
            <Box className={classes.sliderInfo}>
              <Container>
                <Typography variant="h4" className={classes.sliderTitle}>
                  {movie.title}
                </Typography>
                <Typography variant="body1" className={classes.sliderDescription}>
                  {movie.description}
                </Typography>
                <Link to={`/movie/${movie.id}`} className={classes.watchVideo}>
                  <YouTube className={classes.watchVideoIcon} fontSize="large" />
                  <Typography variant="body1" className={classes.watchVideoText}>
                    WATCH VIDEO
                  </Typography>
                </Link>
              </Container>
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
}

export default Mainvisual;

import { Box, Container } from '@material-ui/core';
import React from 'react';
import useStyles from './Home.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Mainvisual from '../../components/Mainvisual/Mainvisual';
import MovieSlider from '../../components/MovieSlider/MovieSlider';
const listMovie = [
  {
    id: 1,
    title: 'Rampage - Out of Control',
    image: 'https://wallpaperaccess.com/full/522306.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
    score: '7.5',
  },
  {
    id: 2,
    title: 'Transformers',
    image: 'https://wallpaperaccess.com/full/37949.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
    score: '7.5',
  },
  {
    id: 3,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image: 'https://wallpaperaccess.com/full/37965.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
    score: '7.5',
  },
  {
    id: 4,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image: 'https://wallpaperaccess.com/full/37943.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
    score: '7.5',
  },
  {
    id: 5,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image: 'https://wallpaperaccess.com/full/517958.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
    score: '7.5',
  },
  {
    id: 6,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image: 'https://wallpaperaccess.com/full/37969.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
    score: '7.5',
  },
  {
    id: 7,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image: 'https://wallpaperaccess.com/full/167696.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
    score: '7.5',
  },
  {
    id: 8,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image: 'https://wallpaperaccess.com/full/25915.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
    score: '7.5',
  },
  {
    id: 9,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image: 'https://wallpaperaccess.com/full/37948.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
    score: '7.5',
  },
  {
    id: 10,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image: 'https://wallpaperaccess.com/full/37945.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
    score: '7.5',
  },
  {
    id: 11,
    title: '6Fate/stay night [Unlimited Blade Works]',
    image: 'https://wallpaperaccess.com/full/37951.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
    score: '7.5',
  },
  {
    id: 12,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image: 'https://wallpaperaccess.com/full/37965.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
    score: '7.5',
  },
];

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Mainvisual />
      <Container>
        <Box className={classes.section}>
          <MovieSlider listMovie={listMovie} title="Best For You" slidesToShow={5} />
        </Box>
        <Box className={classes.section}>
          <MovieSlider
            listMovie={listMovie}
            subtitle="MOST WATCHED MOVIES BY DAYS"
            title="Popular Movies"
            slidesToShow={6}
          />
        </Box>
        <Box className={classes.section}>
          <MovieSlider
            listMovie={listMovie}
            subtitle="MOST WATCHED MOVIES BY DAYS"
            title="Popular TV Shows"
            slidesToShow={4}
          />
        </Box>
      </Container>
    </div>
  );
}

export default Home;

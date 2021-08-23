import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import MovieItem from '../../components/MovieItem/MovieItem';
import useStyles from './Home.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Mainvisual from '../../components/Mainvisual/Mainvisual';
const listMovie = [
  {
    id: 1,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image:
      'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w342/jyqi5BkDoKKIA2WAoz3HBtRHld3.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
  },
  {
    id: 1,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image:
      'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w342/jyqi5BkDoKKIA2WAoz3HBtRHld3.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
  },
  {
    id: 1,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image:
      'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w342/jyqi5BkDoKKIA2WAoz3HBtRHld3.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
  },
  {
    id: 1,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image:
      'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w342/jyqi5BkDoKKIA2WAoz3HBtRHld3.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
  },
  {
    id: 1,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image:
      'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w342/jyqi5BkDoKKIA2WAoz3HBtRHld3.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
  },
  {
    id: 1,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image:
      'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w342/jyqi5BkDoKKIA2WAoz3HBtRHld3.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
  },
  {
    id: 1,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image:
      'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w342/jyqi5BkDoKKIA2WAoz3HBtRHld3.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
  },
  {
    id: 1,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image:
      'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w342/jyqi5BkDoKKIA2WAoz3HBtRHld3.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
  },
  {
    id: 1,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image:
      'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w342/jyqi5BkDoKKIA2WAoz3HBtRHld3.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
  },
  {
    id: 1,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image:
      'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w342/jyqi5BkDoKKIA2WAoz3HBtRHld3.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
  },
  {
    id: 1,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image:
      'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w342/jyqi5BkDoKKIA2WAoz3HBtRHld3.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
  },
  {
    id: 1,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image:
      'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w342/jyqi5BkDoKKIA2WAoz3HBtRHld3.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
  },
  {
    id: 1,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image:
      'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w342/jyqi5BkDoKKIA2WAoz3HBtRHld3.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
  },
  {
    id: 1,
    title: 'Fate/stay night [Unlimited Blade Works]',
    image:
      'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w342/jyqi5BkDoKKIA2WAoz3HBtRHld3.jpg',
    description:
      "The Holy Grail War is a battle royale among seven magi who serve as Masters. Masters, through the use of the command seals they are given when they enter the war, command Heroic Spirits known as Servants to fight for them in battle. In the Fifth Holy Grail War, Rin Tōsaka is among the magi entering the competition. With her Servant, Archer, she hopes to obtain the ultimate prize—the Holy Grail, a magical artifact capable of granting its wielder any wish. One of Rin's classmates, Emiya Shirō, accidentally enters the competition and ends up commanding a Servant of his own known as Saber. As they find themselves facing mutual enemies, Rin and Shirō decide to form a temporary alliance as they challenge their opponents in the Holy Grail War.",
    genres: ['drama', 'roman', 'action'],
  },
];

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Mainvisual />
      <Box marginTop={5}>
        <Container>
          <Grid container spacing={2}>
            {listMovie.map((movie, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <MovieItem
                  id={movie.id}
                  title={movie.title}
                  image={movie.image}
                  description={movie.description}
                  genres={movie.genres}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Home;

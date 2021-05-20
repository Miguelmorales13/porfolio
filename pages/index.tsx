import { Divider, Grid, makeStyles, Typography } from '@material-ui/core'
import { Power3, TweenMax } from 'gsap'
import React, { FunctionComponent, useEffect, useRef } from 'react'
import Header from '../components/home/Header'
import Skills from '../components/Skills'

interface OwnProps {
}

type Props = OwnProps;
const useStyles = makeStyles((theme) => ({
  divider: {
    margin: theme.spacing(4, 'auto')
  },
  aboutMe: {
    margin: theme.spacing(10, 'auto')
  },
  test: {
    minHeight: '70vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: theme.spacing(10, 'auto'),
    padding: theme.spacing(4)
  }

}))

const index: FunctionComponent<Props> = (props) => {
  const classes = useStyles()
  // gsap.registerPlugin(ScrollTrigger)


  const animationHeaders = {
    opacity: 1,
    y: -20,
    ease: Power3.easeOut
  }
  const aboutMe = {
    title: useRef(null),
    description: useRef(null)
  }
  const generateAnimations = () => {
    TweenMax.from(aboutMe.title.current, 1, animationHeaders)
    TweenMax.from(aboutMe.description.current, 1, animationHeaders)
  }
  useEffect(() => {
    generateAnimations()
  }, [])
  return (
    <>
      <Header />
      <Grid container>
        <Grid item xs={12} className={classes.aboutMe}>
          <Typography ref={aboutMe.title} align='center' variant='h4'>About me</Typography>
          <br />
          <Typography ref={aboutMe.description} align='center' variant='h6'>
            Hi, my name is Miguel and I am passionet about software development, I`m contantly learning new technologies beacause the world of compunting is contantly changing and I like learn
            the new technologies
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
        <Skills />
        <Grid item xs={12} className={classes.test}>
          <Typography align='center' variant='h4'>Test Conductual by PDA</Typography>
          <br />
          <Typography align='justify'>
            Miguel is a warm, intense and impatient individual. He wants to get things started, to keep going, and to get results as quickly as possible. Miguel can "handle" many projects and
            activities at any given time. Miguel is seldom satisfied with the current state of affairs; he is always looking for ways to change and improve current systems, methods and results. To
            effect change, Miguel will devise plans and use his energy, goal focus, verbal flair, and charisma to influence and persuade people to agree to his plans. Miguel does not like routine,
            prefers to have a lot of variety in his work and adapts quickly to changing tasks and situations. You can adapt to the needs of others, if they are clear. Miguel is versatile, agile, and
            often shows potential for imaginative and creative thinking. He is very intellectual and likes to investigate the facts. You need supporting evidence. Miguel has a strong interest in
            people and can be effective in interpersonal situations. Many will respond positively to your energetic, outgoing, enthusiastic, and spontaneous style. You can also work well on your own
            thinking and planning tasks. Miguel likes to deal with difficult challenges at work. You are a competitive individual who wants to compete and "win." Due to your strong sense of urgency,
            you may be stressed by work delays and having many long-term projects to deal with.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align='right'>
            06 mar. 2021
          </Typography>
        </Grid>

      </Grid>
    </>
  )
}

export default index


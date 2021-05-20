import { Avatar, Chip, ChipProps, Grid, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React, { FunctionComponent } from 'react'

interface OwnProps {
}

type Props = OwnProps;

const useStyles = makeStyles((theme) => ({
  flex: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: theme.spacing(5)
  },

  flexDevice: {
    overflow: 'auto',
    display: 'flex',
    maxWidth: '90vw',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(5)
  },

  skills: {
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  big: {
    padding: theme.spacing(3),
    margin: theme.spacing(1),
    fontSize: theme.spacing(2.5)
  },
  medium: {
    margin: theme.spacing(1),
    padding: theme.spacing(2.5),
    fontSize: theme.spacing(2)
  },
  small: {
    height: '1em',
    padding: theme.spacing(2),
    fontSize: theme.spacing(1.5),
    margin: theme.spacing(1)
  }
}))

const Skills: FunctionComponent<Props> = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  const skills: ChipProps[] = [
    { className: classes.big, label: 'Go', icon: <Avatar alt='Go' src='/icons/go.png' />, variant: 'default' },
    { className: classes.small, label: 'Java', icon: <Avatar alt='Java' src='/icons/java.png' />, variant: 'default' },
    { className: classes.big, label: 'JavaScript', icon: <Avatar alt='JavaScript' src='/icons/javascript.png' />, variant: 'default' },
    { className: classes.big, label: 'TypeScript', icon: <Avatar alt='TypeScript' src='/icons/typescript.png' />, variant: 'default' },
    { className: classes.big, label: 'Nestjs', icon: <Avatar alt='Nestjs' src='/icons/nestjs.png' />, variant: 'default' },
    { className: classes.medium, label: 'mongoose', icon: <Avatar alt='mongoose' src='/icons/mongoose.png' />, variant: 'default' },
    { className: classes.big, label: 'express', icon: <Avatar alt='express' src='/icons/express.png' />, variant: 'default' },
    { className: classes.big, label: 'material design', icon: <Avatar alt='material design' src='/icons/material-design.png' />, variant: 'default' },
    { className: classes.big, label: 'responsive design', icon: <Avatar alt='responsive design' src='/icons/responsive_design.png' />, variant: 'default' },
    { className: classes.small, label: 'google cloud', icon: <Avatar alt='google cloud' src='/icons/google-cloud.png' />, variant: 'default' },
    { className: classes.big, label: 'jwt', icon: <Avatar alt='jwt' src='/icons/jwt.png' />, variant: 'default' },
    { className: classes.small, label: 'pm2', icon: <Avatar alt='pm2' src='/icons/PM2.png' />, variant: 'default' },
    { className: classes.big, label: 'npm', icon: <Avatar alt='npm' src='/icons/npm.svg' />, variant: 'default' },
    { className: classes.big, label: 'yarn', icon: <Avatar alt='yarn' src='/icons/yarn.png' />, variant: 'default' },
    { className: classes.big, label: 'bash', icon: <Avatar alt='bash' src='/icons/bash.png' />, variant: 'default' },
    { className: classes.big, label: 'linux', icon: <Avatar alt='linux' src='/icons/linux.png' />, variant: 'default' },
    { className: classes.medium, label: 'pwa', icon: <Avatar alt='pwa' src='/icons/PWA.png' />, variant: 'default' },
    { className: classes.big, label: 'Vuejs', icon: <Avatar alt='Vuejs' src='/icons/vuejs.png' />, variant: 'default' },
    { className: classes.big, label: 'React', icon: <Avatar alt='React' src='/icons/react.png' />, variant: 'default' },
    { className: classes.big, label: 'Angular', icon: <Avatar alt='Angular' src='/icons/angular.png' />, variant: 'default' },
    { className: classes.big, label: 'PosgreSQL', icon: <Avatar alt='PosgreSQL' src='/icons/postgres.png' />, variant: 'default' },
    { className: classes.big, label: 'MySQL', icon: <Avatar alt='MySQL' src='/icons/mysql.png' />, variant: 'default' },
    { className: classes.big, label: 'MongoDB', icon: <Avatar alt='MongoDB' src='/icons/mongodb.png' />, variant: 'default' },
    { className: classes.medium, label: 'Heroku', icon: <Avatar alt='Heroku' src='/icons/heroku.png' />, variant: 'default' },
    { className: classes.small, label: 'Crean Architecture', icon: <Avatar alt='Crean Architecture' src='/icons/clean_architecture.png' />, variant: 'default' },
    { className: classes.medium, label: 'Solid', icon: <Avatar alt='Crean' src='/icons/solid.png' />, variant: 'default' },
    { className: classes.big, label: 'Nodejs', icon: <Avatar alt='Solid' src='/icons/node.png' />, variant: 'default' }
  ]
  return <Grid item xs={12} className={classes.skills}>
    <Typography align='center' variant='h4'>Skills</Typography>
    <div className={isSm ? classes.flexDevice : classes.flex}>
      {skills.map((skill, i) => (<Chip  {...skill} key={i} />))}
    </div>
  </Grid>
}

export default Skills

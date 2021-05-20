import React, { FunctionComponent, useEffect, useRef } from 'react'
import { Divider, Grid, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import Image from 'next/image'
import { gsap, Power3, TweenMax } from 'gsap'

interface OwnProps {
}

type Props = OwnProps;

const useStyles = makeStyles(theme => ({
  constentImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: theme.spacing(2, 0)
  },
  rootHeader: {
    backgroundImage: 'url(/background.jpg) ',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  header: {
    overflow: 'hidden',
    margin: theme.spacing(15, 'auto'),
    padding: theme.spacing(2),
    backdropFilter: 'blur(2px)',
    backgroundColor: 'rgba(255,255,255,0.6)'
  },
  dividerXs: {
    width: '90%',
    margin: theme.spacing(2, 'auto')
  },
  image: {
    borderRadius: theme.spacing(20),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}))
const Header: FunctionComponent<Props> = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const isXS = useMediaQuery(theme.breakpoints.down('sm'))

  const headerRefs = {
    name: useRef(null),
    divider: useRef(null),
    profession: useRef(null)
  }
  const animationHeaders = {
    opacity: 1,
    y: -20,
    ease: Power3.easeOut
  }
  const generateAnimations = () => {
    gsap.from(document.getElementById('image'), { duration: 2, borderRadius: '10%' })
    TweenMax.to(headerRefs.name.current, 1, animationHeaders)
    TweenMax.from(headerRefs.profession.current, 1, animationHeaders)
    TweenMax.from(headerRefs.divider.current, 1, { ...animationHeaders, x: '-100%' })
  }
  useEffect(() => {
    generateAnimations()
  }, [])
  return (
    <Grid container className={classes.rootHeader}>
      <Grid className={classes.constentImage} item xs={12} md={4} lg={3}>
        <Image className={classes.image} id='image' height={200} width={200} src='/photo.jpg' />
      </Grid>
      <Grid item xs={12} md={8} lg={9} style={{ padding: '1rem' }}>
        <div className={classes.header}>
          <Typography ref={headerRefs.name} align={'center'} variant={isXS ? 'h3' : 'h1'}>
            Morales Reyes Miguel Angel
          </Typography>
          <Divider ref={headerRefs.divider} className={classes.dividerXs} />
          <Typography ref={headerRefs.profession} align={'center'} variant={'h5'}>
            Developer BackEnd/FrontEnd
          </Typography>

        </div>
      </Grid>
    </Grid>
  )
}

export default Header

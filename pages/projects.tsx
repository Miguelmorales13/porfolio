import React, { FunctionComponent, useRef } from 'react'
import { Slider } from '../components/Slider'
import { Box, makeStyles, Typography } from '@material-ui/core'
import { Bounce, Power3, TweenMax } from 'gsap'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { items } from '../contants/items'

interface OwnProps {
}

type Props = OwnProps;

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(1),
    borderBottom: 'solid 1px #000',
    minWidth: '3rem',
    color: theme.palette.primary.main,
    boxShadow: '0 4px 2px -2px rgba(0,0,0,0.5)'
  },
  chipActive: {
    marginTop: theme.spacing(3),
    borderBottom: `solid 1px red`,
    minWidth: '3rem',
    boxShadow: '0 4px 2px -2px rgba(255,0,0,0.5)'
  }
}))
const projects: FunctionComponent<Props> = (props) => {
  const route = useRouter()
  const classes = useStyles()

  const refs = {
    All: useRef(null),
    Angular: useRef(null),
    React: useRef(null),
    Vue: useRef(null),
    Nodejs: useRef(null),
    Golang: useRef(null),
    Java: useRef(null)
  }
  const animation = {
    y: 10,
    ease: Power3.easeOut
  }
  const animationCancel = {
    y: 0,
    ease: Bounce.easeOut
  }

  const handleCapture = (e) => {
    TweenMax.to(refs[e.target.id], 1, animation)
  }
  const handleCaptureOut = (e) => {
    TweenMax.to(refs[e.target.id], 1, animationCancel)
  }
  const isActive = (key: string) => (route.query['find'] && route.query['find'] == key) || (!route.query['find'] && key == 'All')
  return (
    <div>
      <Typography align='center' variant='h4'>
        Projects
      </Typography>
      <Box display='flex' flexWrap='wrap' maxWidth='80vw' justifyContent={'center'} alignContent='center' height={'5rem'} alignItems='center'>
        {
          Object.keys(refs).map(key => (
            <Link key={key} href={`/projects?find=${key}`}>
              <a style={{ textDecoration: 'none' }}>
                <Typography
                  align='center'
                  className={`${classes.chip} ${isActive(key) ? classes.chipActive : ''}`}
                  innerRef={(ref) => (refs[key] = ref)} id={key}
                  onMouseOver={handleCapture}
                  onMouseOut={handleCaptureOut}
                >
                  {key}
                </Typography>
              </a>
            </Link>

          ))
        }
      </Box>
      <Slider filter={route?.query['find']?.toString() ?? ''} items={items} />
    </div>
  )
}

export default projects

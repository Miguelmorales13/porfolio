import React, { FunctionComponent, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { AppBar, Box, Button, Container, Grid, makeStyles, Paper, Toolbar, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import Image from 'next/image'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OwnProps {
}

type Props = OwnProps;
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh'
  },
  containerRoot: {
    marginBottom: 0,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(3)
  },
  paperRoot: {
    // minHeight: '80vh'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },

  textButton: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none'
  },
  textButtonActive: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none'
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  socialMediaContainerIcons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  socialMediaContainer: {
    minHeight: '30vh',
    width: '100%',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  linkSocialMedia: {
    backgroundColor: theme.palette.background.default,
    boxShadow: '1px 0px 10px rgba(255,255,255,0.4)',
    border: 'solid 2px #000',
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    flexGrow: 1
  },
  titleSm: {
    padding: theme.spacing(1)
  },
  toolbar: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  pageLink: {
    minWidth: theme.spacing(20)
  }
}))
const links = [
  {
    content: '😊 I 😉',
    path: '/'
  }, {
    content: '📞 Contact 📱',
    path: '/contact'
  }, {
    content: '💪 Projects 👷‍',
    path: '/projects'
  }
]
const Layout: FunctionComponent<Props> = ({ children }) => {
  const classes = useStyles()
  const route = useRouter()
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  const handleChaneRoute = () => {
    NProgress.start()
  }
  useEffect(() => {
    route.events.on('routeChangeStart', handleChaneRoute)
    route.events.on('routeChangeComplete', () => NProgress.done())
    return () => {
      route.events.off('routeChangeStart', handleChaneRoute)

    }
  }, [])

  return (
    <div className={classes.root}>
      <AppBar elevation={0} position='sticky'>
        <Container>
          <Toolbar className={classes.toolbar}>
            <Typography variant='h6' className={isSm ? classes.titleSm : classes.title}>
              Hi
            </Typography>
            <Box display='flex' overflow='auto'>
              {
                links.map((link, key) => (
                  <Button key={key} className={classes.pageLink} variant={route.pathname == link.path ? 'outlined' : 'text'} color='secondary'>
                    <Link href={link.path}>
                      <a className={classes.textButton}>
                        {link.content}
                      </a>

                    </Link>
                  </Button>

                ))
              }

            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container className={classes.containerRoot}>
        <Paper elevation={0} className={classes.paperRoot}>
          {children}
        </Paper>
      </Container>
      <footer className={classes.footer}>
        <Grid container>
          <Grid item xs={12} className={classes.socialMediaContainer}>
            <Typography variant='h5'>
              Social media
            </Typography>
            <div className={classes.socialMediaContainerIcons}>
              <Link href='http://www.linkedin.com/in/miguel-angel-morales-reyes-b78677171'>
                <a target='__blank' className={classes.linkSocialMedia}>
                  <Image width={24} color='blak' height={24} src='/social-media/004-linkedin.svg' />
                </a>
              </Link>
              <Link href='https://github.com/Miguelmorales13'>
                <a target='__blank' className={classes.linkSocialMedia}>
                  <Image width={24} color='blak' height={24} src='/social-media/git.png' />
                </a>
              </Link>

            </div>
          </Grid>
        </Grid>
        <Container maxWidth='sm'>

          <Typography align={'center'} variant='body1'> {'Copyright © '}
            Miguel Angel Morales Reyes
            {' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Container>
      </footer>

    </div>
  )
}

export default Layout

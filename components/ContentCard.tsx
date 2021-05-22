import { Box, Button, Chip, Grid, makeStyles } from '@material-ui/core'
import { FunctionComponent } from 'react'

interface OwnProps {
  name: string
  urlCode?: string
  urlView?: string
  labels: string[]
}

type Props = OwnProps;
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  contentChip: {
    minHeight: '100%',
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    maxWidth: '100%'
  },
  allChips: {
    maxWidth: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  chip: {
    border: '1px solid rgba(255, 255, 255, 0.5)',
    color: theme.palette.background.default,
    margin: theme.spacing(1),
    '&:hover': {
      background: theme.palette.background.default,
      color: theme.palette.primary.main
    }
  }
}))
export const ContentCard: FunctionComponent<Props> = ({ name, urlCode, urlView, labels }) => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.contentChip}>
        {labels.map((label, key) => (<Chip key={key} className={classes.chip} variant='outlined' label={label} />))}
      </Grid>
      <Grid item xs={urlView && urlView == 'N/A' ? 12 : 6}>
        <Box px={1}>
          <Button color='inherit' fullWidth variant='outlined' href={`${urlCode ?? 'https://github.com/Miguelmorales13/' + name}`} target='blank'>⛓ Code 🧰</Button>
        </Box>
      </Grid>
      {urlView && urlView != 'N/A' && <Grid item xs={6}>
        <Box px={1}>
          <Button color='inherit' fullWidth variant='outlined' href={`${urlView ?? 'https://miguelmorales13.github.io/' + name}/`} target='blank'>✨ View 🎈</Button>
        </Box>
      </Grid>}
    </Grid>
  )
}

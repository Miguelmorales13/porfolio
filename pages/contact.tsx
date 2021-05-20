import React, { ChangeEvent, FunctionComponent, useState } from 'react'
import { Box, Button, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OwnProps {
}

type Props = OwnProps;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    minHeight: '70vh',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    minHeight: theme.spacing(30),
    minWidth: theme.spacing(40)
  },
  inputMessage: {
    height: theme.spacing(16)
  }
}))

const contact: FunctionComponent<Props> = (_) => {
  const classes = useStyles()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (event) => {
    // eslint-disable-next-line no-console
    console.log(event.target.name, event.target.value)
  }
  const handleChangeInput = (event: ChangeEvent<any>) => {
    console.log(event.target.name, event.target.value)
    setForm(state => ({
      ...state,
      [event.target.name]: event.target.value
    }))
  }
  return (
    <div className={classes.root}>
      <Paper elevation={0}>
        <Grid container component='form' className={classes.form} onSubmit={handleSubmit}>
          <Grid item xs={12} component={Box} pb={10}>
            <Typography align={'center'} variant='h4'>Send me a email</Typography>
          </Grid>
          <Grid item component={Box} p={1} xs={12} md={6}>
            <TextField fullWidth variant='outlined' value={form.name} name='name' onChange={handleChangeInput} label='Name' />
          </Grid>
          <Grid item component={Box} p={1} xs={12} md={6}>
            <TextField fullWidth variant='outlined' value={form.email} type='email' name='email' onChange={handleChangeInput} label='Email' />
          </Grid>
          <Grid item component={Box} p={1} xs={12}>
            <TextField multiline rows={4} fullWidth variant='outlined' value={form.message} name='message' onChange={handleChangeInput} label='Message' />
          </Grid>
          <Grid item component={Box} p={1} xs={12}>
            <Button
              fullWidth
              size='large'
              href={`mailto:miguel.moralesr@hotmail.com?subject=${form.name} : ${form.email}&body=${form.message}`}
              variant='outlined'
              onClick={handleSubmit}>Send</Button>
          </Grid>
        </Grid>

      </Paper>
    </div>
  )
}

export default contact

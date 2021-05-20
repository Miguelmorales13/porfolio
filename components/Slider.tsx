import { Box, Divider, makeStyles, Typography } from '@material-ui/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import React, { FunctionComponent, useMemo } from 'react'
import 'swiper/swiper.min.css'
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'
import 'swiper/components/pagination/pagination.min.css'
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core'

SwiperCore.use([EffectCoverflow, Pagination])

const useStylesOne = makeStyles(theme => ({
  swiperSlide: {
    width: '300px',
    height: '300px',
    transition: 'all ease 0.5'
  },
  caption: {
    height: '100%',
    width: '100%',
    margin: 0,
    transition: 'all ease 0.5',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    backfaceVisibility: 'hidden',
    transform: 'perspective(600px) rotateY(180deg)',
    color: theme.palette.primary.contrastText
  },
  contentCaption: {
    position: 'relative',
    height: '60%',
    padding: theme.spacing(2)
  },
  divider: {
    backgroundColor: theme.palette.background.default,
    margin: theme.spacing(1, 0)
  },
  figure: {
    margin: 0,
    height: '300px',
    width: '300px',

    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: theme.spacing(2),
    position: 'relative',
    transformStyle: 'preserve-3d',
    transform: 'perspective(600px) rotateY(0deg)',
    transition: theme.transitions.create(['box-shadow', 'transform'], {
      duration: theme.transitions.duration.standard
    }),
    '&:hover': {
      boxShadow: '0px 2px 10px 2px rgba(0,0,0,0.25)',
      transform: 'perspective(600px) rotateY(180deg)'
    }
  }
}))

const useStyles = makeStyles((theme) => ({
  swiperContainer: {
    minHeight: '70vh',
    padding: 0
  },
  swiper: {
    minHeight: '400px',
    padding: theme.spacing(10, 0)
  }
}))

export interface ItemSlider {
  image: string
  title: string
  content: any
  category: string
}

interface OwnProps {
  items: ItemSlider[]
  filter?: string
}

type Props = OwnProps;


export const Slider: FunctionComponent<Props> = ({ items, filter }) => {
  const classes = useStyles()
  const classesOne = useStylesOne()
  const itemsFilters = useMemo(() => {
    if (!filter) return items
    if (filter == 'All') return items
    return items.filter(item => item.category == filter)
  }, [filter])
  return <Box p={5} className={classes.swiperContainer}>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      className={classes.swiper}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        'rotate': 50,
        'stretch': 0,
        'depth': 100,
        'modifier': 1,
        'slideShadows': true
      }}
      pagination={true}
    >
      {
        itemsFilters.map((item, key) => (
          <SwiperSlide key={key} className={classesOne.swiperSlide}>
            <div className={classesOne.figure} style={{ backgroundImage: `url(/projects/${item.image})` }}>
              <div className={classesOne.caption}>
                <div className={classesOne.contentCaption}>
                  <Typography variant='h5'>
                    {item.title}
                  </Typography>
                  <Divider className={classesOne.divider} />
                  <Box height='100%'>
                    {item.content}
                  </Box>

                </div>
              </div>

            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>

  </Box>
}
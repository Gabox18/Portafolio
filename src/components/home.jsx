import { Grid, GridItem, useMediaQuery } from '@chakra-ui/react'

function Home() {
  const [isLargerThanHD] = useMediaQuery([
    '(min-width: 720px)',
    '(display-mode: browser)',
  ])
  return (
    <Grid
      h='100vh'
      templateRows='repeat(6, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={1}
    >
      <GridItem rowSpan={2} colSpan={1} bg='tomato' minW='200px'>
        area de foto
      </GridItem>
      <GridItem colSpan={4} rowSpan={6}
      bg='papayawhip' >
        main<br></br>
        {isLargerThanHD?'holla':'hello'}
      </GridItem>
      <GridItem bg='purple'
      rowSpan={4} >
        menu
      </GridItem>
    </Grid>
  )
}

export default Home
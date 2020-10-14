import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const API_URL = "https://run.mocky.io/v3/b3dc9e1b-165f-4648-ab73-1a75e82fd899"


export default function Home () {
    const [apiData, setApiData] = useState(null)
    const [seriesData, setSeriesData] = useState([])
    const [moviesData, setMoviesData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.entries)
                setApiData(data.entries)
                setLoading(false)
            })
        }, [apiData]
    )

    const filterProgramType = (data: any, programType: string): any => {
        const result = data.filter((e: any) => e.programType === programType)
        console.log(result)
        return result
    }

    const handleOnClickSeries = () => {
        setSeriesData(filterProgramType(apiData, "series"))
    }

    const handleOnClickMovies = () => {
        setMoviesData(filterProgramType(apiData, "movie"))
    }

    const cards = (
        <Grid container spacing={2}>
            <Grid item sm={6}>
                <Card>
                    <CardContent onClick={handleOnClickSeries}>
                        <Typography variant="h5" component="h2">
                            SERIES
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={6}>
                <Card>
                    <CardContent onClick={handleOnClickMovies}>
                        <Typography variant="h5" component="h2">
                        PELICULAS
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )

    return (cards)
}

/*const Home = () => {
    return()
}
export default Home
*/

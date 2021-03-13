import React, { Fragment } from "react";
import Grid from "./components/Grid/Grid";
import useAxios from 'axios-hooks'

function App() {

  const [{ data, loading, error }, refetch] = useAxios(
    'https://medical-lookup.netlify.app/.netlify/functions/conditions'
  )

  if (loading) return <p>Loading</p>
  if (error) return <p>Error</p>

  return (
    <Fragment>
        <Grid conditions={data?.conditions}></Grid>
    </Fragment>
  )
}

export default App;
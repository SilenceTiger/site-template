import React, { Fragment } from "react"
import { Route as ReactRoute, Switch } from "react-router-dom"
import modules from "../pages"
import Loading from 'components/Loading'

const getAllRoutes = (pages: any) => {
  const _allRoutes: any = []
  pages.forEach((page: any) => {
    _allRoutes.push(...page.routes)
  })
  return _allRoutes
}

const PrimaryContent = () => {
  const allRoutes = getAllRoutes(modules)
  return (
    <React.Suspense fallback={<Loading />}>
      <Switch>
        <Fragment>
          {allRoutes.map((route: any) => {
            let PageComponent = route.component
            return (
              <ReactRoute
                exact
                key={route.path}
                path={route.path}
                render={(routeprops) => <PageComponent {...routeprops} />}
              />
            )
          })}
        </Fragment>
      </Switch>
    </React.Suspense>
  )
}

export default PrimaryContent

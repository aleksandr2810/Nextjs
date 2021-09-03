import {MainLayout} from '../../components/MainLayout'
import Router from "next/router"
import classes from '../../styles/items.module.scss'
import useTranslation from "next-translate/useTranslation";


export default function New({item}) {

    const { t } = useTranslation()


    return (
        <MainLayout>
            <h1 className={classes.title}>{item.title}</h1>
            <div className={classes.content}>
                <hr/>
                <p className={classes.text}>{item.body}</p>
                <button onClick={() => Router.push('/news')}>{t("common:GoToNews")}</button>
            </div>
        </MainLayout>
    )
}

New.getInitialProps = async (ctx) => {
    const response = await fetch(`http://localhost:4200/news-${ctx.locale}/${ctx.query.id}`)
    const item = await response.json()

    return {
        item
    }
}
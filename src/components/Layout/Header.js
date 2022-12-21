import classes from './header.module.css';
import { Fragment } from 'react';
import MealImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

export default function Header() {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}><img src={MealImage} alt="A table full of delicious food" /></div>
        </Fragment>
    )
}

//this component Layout will take care of routing the URLs with all my application views 

export const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/log-in" component={Login} />
                        <Route exact path="/sign-up" component={Signup} />
                        <Route exact path="/remind" component={Remind} />
                        <Route exact path="/products" component={Products} />
                        <Route exact path="/category/:category_id" component={Category} />
                        <Route exact path="/product/:product_id" component={SingleProduct} />
                        <Route exact path="/checkout" component={Checkout} />
                        <Route exact path="/profile/:user_id" component={Profile} />
                        <Route render={() => <h1>Not found!</h1>} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}
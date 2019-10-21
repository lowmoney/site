import React, { Component } from 'react';
import "../components/uikit.css"
import "../components/uikit.min.css"



class Page extends Component {
    render() {
        return(
            <div>
                <head>    
                    <script src={"../components/uikit.js"}></script>
                    <script src={"../components/uikit-icons.js"}></script>
                </head>

                <div className="uk-card-header uk-grid-small uk-card uk-card-default uk-card-body">
                    <h1 className="uk-text-light uk-heading-small">More things to come soon!</h1>
                    <p className="uk-text-break">Check out my projects below</p>
                </div>

                <div className="uk-card-header uk-grid-small uk-card uk-card-default uk-card-body">
                    <h1 className="uk-text-light uk-heading-small">OptiGamePrice</h1>
                    <p className="uk-text-break">My most latest and greatest project</p>
                    <a class="uk-link-muted" href="https://www.dandyhobbo.com/optigameprice/">OptiGamePrice</a>
                </div>

                <div className="uk-card-header uk-grid-small uk-card uk-card-default uk-card-body">
                    <h1 className="uk-text-light uk-heading-small">Spotify-Remote</h1>
                    <p className="uk-text-break">A lightweight API wrapper for Spotify for python</p>
                    <a class="uk-link-muted" href="https://github.com/lowmoney/Spotify-Remote">Spotify-Remote</a>
                </div>

                <div className="uk-card-header uk-grid-small uk-card uk-card-default uk-card-body">
                    <h1 className="uk-text-light uk-heading-small">URL Saver</h1>
                    <p className="uk-text-break">My first official project. Even published on the Chrome extension store</p>
                    <a class="uk-link-muted" href="https://chrome.google.com/webstore/detail/url-saver/ckjapaekdeccjiiaijkaedmbgegnjleo?utm_source=chrome-ntp-icon">URL saver</a>
                </div>

                <div className="uk-text-center uk-card-footer">
                    <p>Ruckshan Ratnam</p>
                    <p><a href="mailto:hendryratnam@gmail.com" target="_top">hendryratnam@gmail.com</a> / <a href="www.dandyhobbo.com" target="_top">www.dandyhobbo.com</a></p>
                    <a href="https://github.com/lowmoney/" target="_top"><img width="20px" height="20px" src={require("../images/github-icon.png")}/></a>
                    <p>Icons from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                </div>

            </div>
        )
    }
}


export default Page
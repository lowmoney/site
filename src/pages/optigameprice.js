import React, { Component } from 'react';
import Highlight from "react-highlight"
import "../components/uikit.css"
import "../components/uikit.min.css"



class Page extends Component {
    linkBuilder(event) {
        event.preventDefault()
        let output = document.getElementById("userLink")
        let user_input = document.getElementById("userInput").value
        output.innerHTML = ""

        output.innerHTML = ("http://www.optigameprice.com/game/"+user_input.replace(' ','+'))
    }

    render() {
        return(
            <div>
                <head>
                    <link rel="stylesheet" href={require("../components/shades-of-purple.css")} />      
                    <script src={"../components/uikit.js"}></script>
                    <script src={"../components/uikit-icons.js"}></script>
                </head>

                <div>
                    <img id="image" alt="mario, yoshi, and luigi" src={require("../images/mario_lugi_yoshi.jpg")}></img>
                </div>

                <div className="uk-card-header uk-grid-small uk-card uk-card-default uk-card-body">
                    
                    <h1 className="uk-text-light uk-heading-small">OptiGamePrice</h1>
                    <p className="uk-text-break">
                    OptiGamePrice is a site made for people who want to
                    find the lowest price for a game without the hassel 
                    of searching different sites. You can either visit the redirect url
                    and that`ll take you to the online shop for the game for the lowest price
                    or you can send a SMS message with the game name to <a href="sms:+18332759949">+1(833) 275-9949</a> and
                    you`ll recive a tinyurl to the shop with the lowest price.
                    No searching required!
                    </p>

                </div>
                <br/>

                <h1 className="uk-heading-line uk-text-center">The Features</h1>

                <div className="uk-card-header uk-grid-small uk-card uk-card-default uk-card-body">
                        <h1 className="uk-text-light uk-card-title">Sending an API request with a json payload that returns a json object</h1>
                        <p>In these examples we will use the requests library in Python to send the request</p>
                    
                        <p>The API call is <a>http://www.optigameprice.com/search</a></p>
                            
                        <Highlight language="python">

                            <p>import requests</p>

                            <p>url = "http://www.optigameprice.com/search"</p>
                        
                            <p>r = requests.get(url,json={"{"}"key":"Dex"){"}"}</p>
                            
                            <p>r.json()['game']</p>

                            <p>'Dex'</p>

                            <p>r.json()['price']</p>

                            <p>'2.99'</p>

                            <p>r.json()['shop']</p>

                            <p>'Gog.com'</p>

                            <p>r.json()['link']</p>

                            <p>'http://tinyurl.com/y6ju2gq2'</p>
                                
                        </Highlight>
                </div>
                <br/>

                <div className="uk-card-header uk-grid-small uk-card uk-card-default uk-card-body">
                    <h1 className="uk-text-light uk-card-title">
                        You can also build your own link that, when visited, will redirect
                        the visitor to the shop with the lowest price for the game.
                        Great if your on Youtube and have done a review on a game!
                    </h1>
                    <p className="uk-text-break">
                        To build the link simply copy over the link: http://www.optigameprice.com/game/game+name.
                        Replace "game+name" with the game you want users to be redirected too.
                        For example, to send users to the lowest price for Destiny 2, you would use this link:
                        http://www.optigameprice.com/game/Destiny+2
                    </p>

                    <p className="uk-text-break">
                        I`ve added a way to build a link. Simply type the game name, then copy and paste!
                    </p>

                    <div className="uk-margin">
                        <form onChange={this.linkBuilder} className="uk-search uk-search-default">
                            <input id="userInput" className="uk-search-input" type="search" placeholder="Enter game name..."/> 
                            <button className="uk-button uk-button-primary uk-button-small">Make Link</button>
                        </form>
                    </div>

                    <p className="uk-text-break" id="userLink">

                    </p>

                </div>
                <br/>

                <div className="uk-card-header uk-grid-small uk-card uk-card-default uk-card-body">
                    <h1 className="uk-text-light uk-card-title">
                        Another way to access the lowest price is to send the game name to <a className="uk-link-muted" href="sms:+18332759949">+1(833) 275-9949</a>
                    </h1>
                    <p className="uk-text-break">
                        Simply send a SMS to <a className="uk-link-muted" href="sms:+18332759949">+1(833) 275-9949</a> with the game name and if found you`ll get a response
                        with a tinyurl link to the shop that has the game for the lowest price.
                    </p>
                </div>
                <br/>

                <div className="uk-card-header uk-grid-small uk-card uk-card-default uk-card-body">
                    <h1 className="uk-text-light uk-card-title">
                        Developing Features
                    </h1>

                    <p className="uk-text-break">
                        I`m working on having the ability for users to get data from the database.
                        When you send a request to /search and a game name to the SMS number and link for the redirection url
                        the game name is added to the database and the ammount of times the game has been searched (hits) 
                        is increased by one and added to the database. As of now you can theortically get the whole database
                        as an array of json objects or get the ammount of searchs (hits) of a particular game.
                    </p>
                        
                    <p className="uk-text-break">
                        If you wish to try them out simply add /hits/all or /hits/game_name to the end of the url
                        <Highlight language="python">
                            <p>import requests</p>

                            <p>url = "http://www.optigameprice.com/hits/all"</p>

                            <p>r = requests.get(url)</p>

                            <p>r.json()</p>
                            
                            <p>
                                [
                                    {"{"}
                                    "game_name" : "game_name",
                                    "hits" : "20"
                                    {"}"},
                                            
                                    {"{"}
                                    "game_name" : "game_name",
                                    "hits" : "10"
                                    {"}"},

                                    {"{"}
                                    "game_name" : "game_name",
                                    "hits" : "30"
                                    {"}"}

                                ]
                            </p>
                        </Highlight>

                        <Highlight language="python">
                            <p>import requests</p>

                            <p>url = "http://www.optigameprice.com/hits/Dex"</p>

                            <p>r = requests.get(url)</p>

                            <p>r.json()</p>

                            <p>
                                {"{"}
                                "game_name" : "Dex",
                                "hits" : 5
                                {"}"}
                            </p>

                        </Highlight>

                        <p>
                            So far the in my testing you can get the hits of a particular game 
                            but the "get all" link does not work at the moment.
                        </p>

                    </p>
                </div>
                <br/>

                <div className="uk-text-center uk-card-footer">
                    <p>Developed by Ruckshan Ratnam</p>
                    <p><a href="mailto:hendryratnam@gmail.com" target="_top">hendryratnam@gmail.com</a> / <a href="www.dandyhobbo.com" target="_top">www.dandyhobbo.com</a></p>
                    <a href="https://github.com/lowmoney/" target="_top"><img width="20px" height="20px" src={require("../images/github-icon.png")}/></a>
                    <p>Icons from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                </div>

            </div>
        )
    }
}


export default Page
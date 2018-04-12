# Memory Game Project

## Table of Contents

* [Overview](#Overview)
* [Game](#Game)
* [Dependencies](#Dependencies)


## Overview

I did my best to follow all instructions of Memory Game Project, however my knowledge, and most of all practice, is really basic.

I found it difficult to traverse DOM, access elements, modify them, etc - it needs much practice.
Also - the knowledge seems to be too fresh and not well memorised.

## Game

Game starts with deck of 16 cards created. Clock starts when page loads (worth considering starting clock after the first move)
Click event listeners are added to every card - once clicked they call function showing card.
Player has to match pair of card - if there is no match, both cards are hidden again.
Once they are matching game locks pair and player has to guess another pair.
Moves are counted and star rating is updated accordingly.
Matched cards are counted and once player matches all of them game ends.
Clock is stopped and player's time, number of moves and rating is displayed.
Player can restart game at anytime using restart button.

## Dependencies

Icons - Bootstrap CDN Font Awesome
https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css

Font - Google Coda
https://fonts.googleapis.com/css?family=Coda

jQuery CDN - Google
https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js

shuffle function
http://stackoverflow.com/a/2450976

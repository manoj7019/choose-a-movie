const movies = [ 'King Kong (1933)',
'Citizen Kane (1941)',
'Vertigo (1958)',
'The Third Man (1949)',
'Floating Weeds (1959)',
'Casablanca (1942)',
'Singin\' in the Rain (1952)',
'Tokyo Story (1953)',
'Raging Bull (1980)',
'2001: A Space Odyssey (1968)',
'La Dolce Vita (1960)',
'Apocalypse Now (1979)',
'Aguirre: The Wrath of God (1972)',
'The General (1926)',
'The Tree of Life (2011)',
'The Decalogue (1989)',
'Synecdoche, New York (2008)',
'Monster (2003)',
'Juno (2007)',
'Chop Shop (2007)',
'Pan\'s Labyrinth (2006)',
'Departures (2008)',
'A Separation (2011)',
'No Country for Old Men (2007)',
'Shame (2011)',
'Silent Light (2007)',
'Fargo (1996)',
'Persona (1966)',
'The Rules of the Game (1939)',
'The Music Room (1958)',
'The Man Who Shot Liberty Valance (1962)',
'Hidden (2005)',
'McCabe & Mrs. Miller (1971)',
'The Thin Man (1934)',
'Gates of Heaven (1978)',
'Notorious (1946)',
'28 Up (1984)',
'Do the Right Thing (1989)',
'E.T. the Extra-Terrestrial (1982)',
'JFK (1991)',
'The Right Stuff (1983)',
'My Dinner With André (1981)',
'Raiders of the Lost Ark (1981)',
'House of Games (1987)',
'Ran (1985)',
'Hoop Dreams (1994)',
'Pulp Fiction (1994)',
'Schindler\'s List (1993)',
'Three Colors Trilogy (1994)',
'Leaving Las Vegas (1995)',
'25th Hour (2002)',
'Mississippi Burning (1988)',
'Platoon (1986)',
'Malcolm X (1992)',
'The Hurt Locker (2008)',
'Me and You and Everyone We Know (2005)',
'Breaking the Waves (1996)',
'The Son (2002)',
'Almost Famous (2000)',
'My Winnipeg (2007)',
'The Godfather (1972)',
'Bonnie and Clyde (1967)',
'Nashville (1975)',
'Taxi Driver (1976)',
'Chinatown (1974)',
'Days of Heaven (1978)',
'Blow-Up (1966)',
'Beauty and the Beast (1991)',
'Network (1976)',
'The Wild Bunch (1969)',
'Wings of Desire (1987)',
'Body Heat (1981)',
'Star Wars (1977)',
'Gone With the Wind (1939)',
'Psycho (1960)',
'Lawrence of Arabia (1962)',
'Dr. Strangelove Or: How I Learned to Stop Worrying and Love the Bomb (1964)',
'Some Like It Hot (1959)',
'The Wizard of Oz (1939)',
'It\'s a Wonderful Life (1946)',
'The Silence of the Lambs (1991)',
'Sunset Boulevard (1950)',
'On the Waterfront (1954)',
'Double Indemnity (1944)',
'All About Eve (1950)',
'The Apartment (1960)',
'The Shawshank Redemption (1994)',
'City Lights (1931)',
'The Maltese Falcon (1941)',
'8½ (1963)',
'Bicycle Thieves (1948)',
'Pinocchio (1940)',
'Metropolis (1927)',
'The 400 Blows (1959)',
'The Night of the Hunter (1955)',
'Manhattan (1979)',
'M (1931)',
'Duck Soup (1933)',
'The Seventh Seal (1957)',
'Sweet Smell of Success (1957)' ];

let para = document.querySelector('#para');
let againText = document.querySelector('#again');

againText.textContent = '';

function getMovie() {
    let chosenMovie = movies [(Math.floor(Math.random() * movies.length))];
    para.textContent = `"${chosenMovie}"`;
    againText.textContent = `Refresh the page and click the button again if you've watched the above movie already.`;
};

function disableBtn() {
    let btn = document.getElementById('btn');
    btn.disabled = true;
}

function playSound() {
    let audio = document.getElementById('btn');
    clickedAudio.play();
}
//your code here

let bandNames = ['The Rolling Stones', 'Aerosmith', 'The Beatles', 'Red Hot Chili Peppers', 'Nirvana'];

        function stripArticles(name) {
            let articles = ['a', 'an', 'the'];
            let words = name.split(' ');
            let filteredWords = words.filter(function(word) {
                return !articles.includes(word.toLowerCase());
            });
            return filteredWords.join(' ');
        }

        function sortBandNames() {
            let sortedNames = bandNames.map(stripArticles).sort(function(a, b) {
                return a.localeCompare(b);
            });

            let bandList = document.getElementById('band');
            sortedNames.forEach(function(name) {
                let listItem = document.createElement('li');
                listItem.innerText = name;
                bandList.appendChild(listItem);
            });
        }
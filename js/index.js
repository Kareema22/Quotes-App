let quotes = [
    {
        'author': 'Jim Rohn',
        'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {
        'author': 'Epictetus',
        'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {
        'author': 'Frank Sinatra',
        'quote': 'The best revenge is massive success.'
    },
    {
        'author': 'Wayne Gretzy',
        'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {
        'author': 'Nelson Mandela',
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {
        'author': 'Elbert Hubbard',
        'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {
        'quote': 'Be yourself; everyone else is already taken.',
        'author': 'Oscar Wilde'
    },
    {
        'quote': 'So many books, so little time.',
        'author': 'Frank Zappa'
    },
    {
        'quote': 'Two things are infinite: the universe and human stupidity; and Iam not sure about the universe.',
        'author': 'Albert Einstein'
    },
    {
        'quote': 'A room without books is like a body without a soul.',
        'author': 'Marcus Tullius Cicero'
    },
    {
        'quote': 'You only live once, but if you do it right, once is enough.',
        'author': 'Mae West'
    },
    {
        'quote': 'Be the change that you wish to see in the world.',
        'author': 'Mahatma Gandhi'
    },
    {
        'quote': 'If you tell the truth, you do not have to remember anything.',
        'author': 'Mark Twain'
    },
    {
        'quote': 'A friend is someone who knows all about you and still loves you.',
        'author': 'Elbert Hubbard'
    },
    {
        'quote': 'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .',
        'author': 'C.S. Lewis, The Four Loves'
    },
    {
        'quote': 'A friend is someone who knows all about you and still loves you.',
        'author': 'Elbert Hubbard'
    },
    {
        'quote': 'Always forgive your enemies; nothing annoys them so much.',
        'author': 'Oscar Wilde'
    },
    {
        'quote': 'Without music, life would be a mistake.',
        'author': 'Friedrich Nietzsche, Twilight of the Idols'
    },
    {
        'quote': 'It is better to be hated for what you are than to be loved for what you are not.',
        'author': 'Andre Gide, Autumn Leaves'
    }
];

function generateQuote() {
    let quoteElement = document.getElementById("quote");
    let authorElement = document.getElementById("author");
    let quote = {};

    do {
        let random = Number.parseInt(Math.random() * quotes.length);
        quote = quotes[random];
    } while (quoteElement.innerHTML.includes(quote.quote));

    quoteElement.innerHTML = `"${quote.quote}"`;
    authorElement.innerHTML = `--${quote.author}`
}

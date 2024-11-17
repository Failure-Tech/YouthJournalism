// import { 
//     FaHandsClapping, 
//     FaRegComment, 
//     FaRegBookmark, 
//     FaPlay, 
//     FaUpload 
// } from 'react-icons/fa6';
// import jeff from '../assets/jeff.png';
// import biden from '../assets/biden.png';
// import videep from '../assets/videep.png';

// const Article = () => {
//     return (
//         <div className="flex flex-col items-center max-w-4xl mx-auto px-4 pt-8">
//             <div className="w-full max-w-3xl">
//                 <h1 className="text-5xl font-bold text-center article-title leading-tight mb-8">
//                     Mass Media and the Need for Nonprofit Journalism
//                 </h1>

//                 <div className="flex items-start w-full mb-4">
//                     <img
//                         src={videep}
//                         alt="Author"
//                         className="w-10 h-10 rounded-full object-cover"
//                     />
//                     <div className="flex flex-col ml-3">
//                         <span className="font-medium text-gray-900">Videep Cheemangunta</span>
//                         <div className="flex items-center text-sm text-gray-500">
//                             <span>3 min read</span>
//                             <span className="mx-1.5 inline-block align-middle">·</span>
//                             <span>1 day ago</span>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="w-full border-t border-gray-200 my-3" />

//                 <div className="flex justify-between items-center w-full text-gray-500 mb-3">
//                     <div className="flex items-center gap-5">
//                         <button className="hover:text-gray-900">
//                             <FaHandsClapping className="w-4 h-4" />
//                         </button>
//                         <button className="hover:text-gray-900">
//                             <FaRegComment className="w-4 h-4" />
//                         </button>
//                     </div>

//                     <div className="flex items-center gap-5">
//                         <button className="hover:text-gray-900">
//                             <FaRegBookmark className="w-4 h-4" />
//                         </button>
//                         <button className="hover:text-gray-900">
//                             <FaPlay className="w-4 h-4" />
//                         </button>
//                         <button className="hover:text-gray-900">
//                             <FaUpload className="w-4 h-4" />
//                         </button>
//                     </div>
//                 </div>

//                 <div className="w-full border-t border-gray-200 mb-6" />

//                 <div className="text-gray-800 leading-relaxed">
//                     <p className="text-lg">
//                         In August of 2013, billionaire Jeff Bezos acquired the Washington Post in a $250 million purchase. Up until this point, the Washington Post had a reputation for independent journalism.
//                         <br /><br />
//                         While many were worried about Bezos' acquisition and what it meant for the Post's journalistic integrity, the founder of Amazon famously never demonstrated an inclination to interfere with the Post's journalism. In fact, Bezos named Marty Baron, a prominent editor known for his journalistic integrity, as the Post's editor-in-chief.
//                         <br /><br />
//                         This show of good faith silenced any opposition to Bezos' purchasing of the Post, and seemingly assured the independent journalism of the Washington Post would continue. However, Bezos' influences on the company are still present, and serve as a haunting demonstration of the bias of Mass Media.
//                     </p>

//                     <figure className="my-8 flex flex-col items-center">
//                         <img 
//                             src={jeff}
//                             alt="Jeff Bezos"
//                             className="w-2/3 h-auto rounded-lg shadow-lg"
//                         />
//                         <figcaption className="mt-3 text-sm text-gray-500 italic">
//                             Image Taken from the verified Twitter Account of Jeff Bezos
//                         </figcaption>
//                     </figure>

//                     <p className="text-lg">
//                         The image above shows Jeff Bezos criticizing a comment made by President Joe Biden's twitter account. The comment suggested that wealthier corporations had a part to play in the substantial increase in inflation felt during Biden's presidency. 3 days later, Washington Post Opinion Writer Catherine Rampbell, who is known for her support of the Biden administration, uncharacteristically releases the following{' '}
//                         <a 
//                             href="https://www.washingtonpost.com/opinions/2022/05/16/democrats-need-more-tough-love-economy-inflation-greedflation-biden/?scrolltoken=YM4fwaVK0Akfcqxs3xj_UXURVYEtocvlJqda8eV74GTAOMVrB7z6xbd8FlESza5SSQN1OOhWnXgjdb2rL9kI-JMH7Y02UTW21WGleX5Im_l6JVS7RZu7fYnnUqlN62wjSxAObsBcBSp3dD19hsZdtT8pJVxdQe1W-7rvV2UCvGxtAAODuC6OvmoJIlpfybOtO4S2rIl9Tzw77uFqaXviHwWqbmFg4169KgVtGg.eyJraWQiOiIyIn0"
//                             className="text-blue-600 hover:text-blue-800 underline"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             article
//                         </a>
//                         , criticizing the Biden administration's policies.
//                     </p>

//                     <figure className="my-8 flex flex-col items-center">
//                         <img 
//                             src={biden}
//                             alt="Jeff Bezos"
//                             className="w-2/3 h-auto rounded-lg shadow-lg"
//                         />
//                     </figure>

//                     <p className="text-lg mt-6">
//                         Regardless of one's political beliefs, this story proves to be an unsettling exhibition of how mass media works, and raises one important question: <strong>Why are billionaires acquiring media companies?</strong>
//                         <br /><br />
//                         Billionaires are after two things: power and wealth. This is evident and can easily be spotted in how they influence the media companies they own. The example above demonstrates how billionaires gain power. By using their media platforms, the rich can become more powerful by persuading ordinary individuals to support or oppose an idea. Billionaires also seek to fill their pockets. They do this by turning news companies into entertainment companies. Simply put, the more the news can entertain its viewers, the more revenue that corporation will generate. Because of this, news companies fail to report niche topics that truly affect people. News companies being used for entertainment can lead to a dangerously uninformed society.
//                         <br /><br />
//                         That is precisely why Nonprofit Journalism is the future of news media. A nonprofit journalism source is needed to bring a voice to those who do not have one. A journalism source that focuses on integrity, no political bias, and has no interest in entertainment, but rather giving a voice to niche topics will lead to a well-informed, proactive society.
//                         <br /><br />
//                         And who better to cover these topics than high school students? What other demographic group brings fresh perspectives, a clear desire to change the world for the better, and raw passion and curiosity? This is the mission of the Teen Youth Journalism Initiative.
//                     </p>

//                     <div className="flex justify-between items-center w-full text-gray-500 mt-6">
//                         <div className="flex items-center gap-5">
//                             <button className="hover:text-gray-900">
//                                 <FaHandsClapping className="w-4 h-4" />
//                             </button>
//                             <button className="hover:text-gray-900">
//                                 <FaRegComment className="w-4 h-4" />
//                             </button>
//                         </div>

//                         <div className="flex items-center gap-5">
//                             <button className="hover:text-gray-900">
//                                 <FaRegBookmark className="w-4 h-4" />
//                             </button>
//                             <button className="hover:text-gray-900">
//                                 <FaPlay className="w-4 h-4" />
//                             </button>
//                             <button className="hover:text-gray-900">
//                                 <FaUpload className="w-4 h-4" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Article;
import React, { useState, useCallback, useEffect } from 'react';
import { 
    FaHandsClapping, 
    FaRegComment, 
    FaRegBookmark, 
    FaPlay, 
    FaPause,
    FaUpload 
} from 'react-icons/fa6';
import confetti from 'canvas-confetti';
import jeff from '../assets/jeff.png';
import biden from '../assets/biden.png';
import videep from '../assets/videep.png';

const Article = () => {
    const [claps, setClaps] = useState(() => {
        // Initialize from localStorage if available
        const savedClaps = localStorage.getItem('articleClaps');
        return savedClaps ? parseInt(savedClaps, 0) : 0;
    });
    const [isPlaying, setIsPlaying] = useState(false);
    const [utterance, setUtterance] = useState(null);

    // Save claps to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('articleClaps', claps.toString());
    }, [claps]);

    // Cleanup speech synthesis when component unmounts
    useEffect(() => {
        return () => {
            if (utterance) {
                window.speechSynthesis.cancel();
            }
        };
    }, [utterance]);

    const handleClap = useCallback(() => {
        setClaps(prev => prev + 1);
        
        // Create confetti effect
        confetti({
            particleCount: 50,
            spread: 70,
            origin: { y: 0.8 },
            colors: ['#60A5FA', '#3B82F6', '#2563EB'], // Blue theme
            ticks: 100
        });
    }, []);

    const extractArticleText = () => {
        const paragraphs = document.querySelectorAll('.text-lg');
        return Array.from(paragraphs).map(p => p.textContent).join(' ');
    };

    const toggleSpeech = () => {
        if (isPlaying) {
            window.speechSynthesis.cancel();
            setIsPlaying(false);
            setUtterance(null);
        } else {
            const text = extractArticleText();
            const newUtterance = new SpeechSynthesisUtterance(text);
            
            // Configure speech settings
            newUtterance.rate = 1;
            newUtterance.pitch = 1;
            newUtterance.volume = 1;
            
            newUtterance.onend = () => {
                setIsPlaying(false);
                setUtterance(null);
            };

            newUtterance.onerror = () => {
                setIsPlaying(false);
                setUtterance(null);
            };

            setUtterance(newUtterance);
            setIsPlaying(true);
            window.speechSynthesis.speak(newUtterance);
        }
    };

    return (
        <div className="flex flex-col items-center max-w-4xl mx-auto px-4 pt-8">
            <div className="w-full max-w-3xl">
                <h1 className="text-5xl font-bold text-center article-title leading-tight mb-8">
                    Mass Media and the Need for Nonprofit Journalism
                </h1>

                <div className="flex items-start w-full mb-4">
                    <img
                        src={videep}
                        alt="Author"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col ml-3">
                        <span className="font-medium text-gray-900">Videep Cheemangunta</span>
                        <div className="flex items-center text-sm text-gray-500">
                            <span>3 min read</span>
                            <span className="mx-1.5 inline-block align-middle">·</span>
                            <span>1 day ago</span>
                        </div>
                    </div>
                </div>

                <div className="w-full border-t border-gray-200 my-3" />

                <div className="flex justify-between items-center w-full text-gray-500 mb-3">
                    <div className="flex items-center gap-5">
                        <button 
                            className="hover:text-gray-900 flex items-center gap-2 transition-all"
                            onClick={handleClap}
                            aria-label="Clap for article"
                        >
                            <div className="relative">
                                <FaHandsClapping 
                                    className={`w-4 h-4 transition-colors duration-200 ${
                                        claps > 0 ? 'text-blue-500' : ''
                                    }`} 
                                />
                                {claps > 0 && (
                                    <span className="absolute -top-4 -right-4 text-sm font-medium text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full">
                                        {claps}
                                    </span>
                                )}
                            </div>
                        </button>
                        <button className="hover:text-gray-900" aria-label="Comment">
                            <FaRegComment className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="flex items-center gap-5">
                        <button className="hover:text-gray-900" aria-label="Bookmark">
                            <FaRegBookmark className="w-4 h-4" />
                        </button>
                        <button 
                            className="hover:text-gray-900 relative group"
                            onClick={toggleSpeech}
                            aria-label={isPlaying ? 'Pause reading' : 'Read article'}
                        >
                            {isPlaying ? (
                                <FaPause className="w-4 h-4 text-blue-500" />
                            ) : (
                                <FaPlay className="w-4 h-4" />
                            )}
                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {isPlaying ? 'Pause reading' : 'Read article'}
                            </span>
                        </button>
                        <button className="hover:text-gray-900" aria-label="Share">
                            <FaUpload className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="w-full border-t border-gray-200 mb-6" />

                <div className="text-gray-800 leading-relaxed">
                    <p className="text-lg">
                        In August of 2013, billionaire Jeff Bezos acquired the Washington Post in a $250 million purchase. Up until this point, the Washington Post had a reputation for independent journalism.
                        <br /><br />
                        While many were worried about Bezos' acquisition and what it meant for the Post's journalistic integrity, the founder of Amazon famously never demonstrated an inclination to interfere with the Post's journalism. In fact, Bezos named Marty Baron, a prominent editor known for his journalistic integrity, as the Post's editor-in-chief.
                        <br /><br />
                        This show of good faith silenced any opposition to Bezos' purchasing of the Post, and seemingly assured the independent journalism of the Washington Post would continue. However, Bezos' influences on the company are still present, and serve as a haunting demonstration of the bias of Mass Media.
                    </p>

                    <figure className="my-8 flex flex-col items-center">
                        <img 
                            src={jeff}
                            alt="Jeff Bezos"
                            className="w-2/3 h-auto rounded-lg shadow-lg"
                        />
                        <figcaption className="mt-3 text-sm text-gray-500 italic">
                            Image Taken from the verified Twitter Account of Jeff Bezos
                        </figcaption>
                    </figure>

                    <p className="text-lg">
                        The image above shows Jeff Bezos criticizing a comment made by President Joe Biden's twitter account. The comment suggested that wealthier corporations had a part to play in the substantial increase in inflation felt during Biden's presidency. 3 days later, Washington Post Opinion Writer Catherine Rampbell, who is known for her support of the Biden administration, uncharacteristically releases the following{' '}
                        <a 
                            href="https://www.washingtonpost.com/opinions/2022/05/16/democrats-need-more-tough-love-economy-inflation-greedflation-biden/"
                            className="text-blue-600 hover:text-blue-800 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            article
                        </a>
                        , criticizing the Biden administration's policies.
                    </p>

                    <figure className="my-8 flex flex-col items-center">
                        <img 
                            src={biden}
                            alt="President Biden"
                            className="w-2/3 h-auto rounded-lg shadow-lg"
                        />
                    </figure>

                    <p className="text-lg mt-6">
                        Regardless of one's political beliefs, this story proves to be an unsettling exhibition of how mass media works, and raises one important question: <strong>Why are billionaires acquiring media companies?</strong>
                        <br /><br />
                        Billionaires are after two things: power and wealth. This is evident and can easily be spotted in how they influence the media companies they own. The example above demonstrates how billionaires gain power. By using their media platforms, the rich can become more powerful by persuading ordinary individuals to support or oppose an idea. Billionaires also seek to fill their pockets. They do this by turning news companies into entertainment companies. Simply put, the more the news can entertain its viewers, the more revenue that corporation will generate. Because of this, news companies fail to report niche topics that truly affect people. News companies being used for entertainment can lead to a dangerously uninformed society.
                        <br /><br />
                        That is precisely why Nonprofit Journalism is the future of news media. A nonprofit journalism source is needed to bring a voice to those who do not have one. A journalism source that focuses on integrity, no political bias, and has no interest in entertainment, but rather giving a voice to niche topics will lead to a well-informed, proactive society.
                        <br /><br />
                        And who better to cover these topics than high school students? What other demographic group brings fresh perspectives, a clear desire to change the world for the better, and raw passion and curiosity? This is the mission of the Teen Youth Journalism Initiative.
                    </p>

                    <div className="flex justify-between items-center w-full text-gray-500 mt-6">
                        <div className="flex items-center gap-5">
                            <button 
                                className="hover:text-gray-900 flex items-center gap-2 transition-all"
                                onClick={handleClap}
                                aria-label="Clap for article"
                            >
                                <div className="relative">
                                    <FaHandsClapping 
                                        className={`w-4 h-4 transition-colors duration-200 ${
                                            claps > 0 ? 'text-blue-500' : ''
                                        }`} 
                                    />
                                    {claps > 0 && (
                                        <span className="absolute -top-4 -right-4 text-sm font-medium text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full">
                                            {claps}
                                        </span>
                                    )}
                                </div>
                            </button>
                            <button className="hover:text-gray-900" aria-label="Comment">
                                <FaRegComment className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="flex items-center gap-5">
                            <button className="hover:text-gray-900" aria-label="Bookmark">
                                <FaRegBookmark className="w-4 h-4" />
                            </button>
                            <button 
                                className="hover:text-gray-900 relative group"
                                onClick={toggleSpeech}
                                aria-label={isPlaying ? 'Pause reading' : 'Read article'}
                            >
                                {isPlaying ? (
                                    <FaPause className="w-4 h-4 text-blue-500" />
                                ) : (
                                    <FaPlay className="w-4 h-4" />
                                )}
                                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {isPlaying ? 'Pause reading' : 'Read article'}
                                </span>
                            </button>
                            <button className="hover:text-gray-900" aria-label="Share">
                                <FaUpload className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;
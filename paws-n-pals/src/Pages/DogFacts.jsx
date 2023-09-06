import  {useState, useEffect} from 'react'

const doggieFacts = [
    {
        fact: "Forty-five percent of U.S. dogs sleep in their owner’s beds",
    },
    {
        fact: " All dogs dream, but puppies and senior dogs dream more frequently than adult dogs",
    },
    {
        fact: " Seventy percent of people sign their dog’s name on their holiday cards",
    },
    {
        fact: "A dog’s sense of smell is legendary, but did you know that their nose has as many as 300 million receptors? In comparison, a human nose has about 5 million¹.",
    },
    {
        fact: "Rin Tin Tin, the famous German Shepherd Dog, was nominated for an Academy Award",
    },
    {
        fact: "Dogs’ noses can sense heat and thermal radiation, which explains why blind or deaf dogs can still hunt",
    },
    {
        fact: "The French Bulldog was first named the most popular breed in 2022",
    },
    {
        fact: " The name Collie means “black.” (Collies once tended black-faced sheep.)",
    },
    {
        fact: "Yawning is contagious — even for dogs. Research shows that the sound of a human yawn can trigger one from your dog. And it’s four times as likely to happen when it’s the yawn of a person your pet know",
    },
    {
        fact: "he Dandie Dinmont Terrier is the only breed named for a fictional person, a character in the novel “Guy Mannering” by Sir Walter Scott",
    },
    {
        fact: "Dogs curl up in a ball when sleeping to protect their organs — a holdover from their days in the wild, when they were vulnerable to predator attacks",
    },
    {
        fact: "The Basenji is not technically “barkless,” as many people think. They can yodel",
    },
    {
        fact: "The Australian Shepherd is not actually from Australia. In fact, they are an American breed",
    },
    {
        fact: " And the Labrador Retriever is originally from Newfoundland",
    },
    {
        fact: " Human blood pressure goes down when petting a dog. And so does the dog’s",
    },
    {
        fact: "There are over 75 million pet dogs in the U.S. — more than in any other countrys",
    },
    {
        fact: "A person who hunts with a Beagle is known as a “Beagler",
    },
    {
        fact: "Dogs are not color-blind. They can see blue and yellow",
    },
]

const DogFacts = ({fact}) => {
    
  return (
    <div className='w-full'>
       <h2 className='text-3xl text-emerald-800 mt-10 mb-7 ml-10'> fun facts about dogs</h2> 
        <div className='mx-auto w-full'>
        <ul className='flex flex-col mx-auto w-8/12'>

           { doggieFacts.map((facts, id) => (
            <li className=' flex mb-4'>
               <p className='ml-6'> -  {facts.fact}</p>
            </li>
           ) )}
        </ul>
      </div>

    </div>
  )
}

export default DogFacts
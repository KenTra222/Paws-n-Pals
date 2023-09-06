import {useEffect} from 'react'

import { init } from 'commandbar';
init('9a6d16ff');

const UseCommandBar = ( props) => {
    useEffect(() => {
        const loggedInUserId = '9a6d16ff';
        window.CommandBar.boot(loggedInUserId, {}, {
       
      
    });
     
        
        return () => {
          window.CommandBar.shutdown();
    
          window.CommandBar.addCommand({
            text: 'Go to About Page',
            name: 'go_to_about_page',
            arguments: {},
            template: {
              type: 'link',
              value: 'https://paws-n-pals.vercel.app/about',
              operation: 'blank',
            },
           icon: 'link'
          });
    
          window.CommandBar.addCommand({
            text: 'Go to Food Page',
            name: 'go_to_food_page',
            arguments: {},
            template: {
              type: 'link',
              value: 'https://paws-n-pals.vercel.app/food',
              operation: 'blank',
            }
          });
    
          window.CommandBar.addCommand({
            text: 'Go to Abopt Page',
            name: 'go_to_abopt_page',
            arguments: {},
            template: {
              type: 'link',
              value: 'https://paws-n-pals.vercel.app/Adopt',
              operation: 'blank',
            },
           icon: 'link'
          });
    
          window.CommandBar.addCommand({
            text: 'Go to Abopt Page',
            name: 'go_to_abopt_page',
            arguments: {},
            template: {
              type: 'link',
              value: 'https://paws-n-pals.vercel.app/Adopt',
              operation: 'blank',
            },
           icon: 'link'
          });
    
          window.CommandBar.addCommand({
            text: 'Return Home',
            name: 'return_home',
            arguments: {},
            template: {
              type: 'link',
              value: 'https://paws-n-pals.vercel.app/',
              operation: 'blank',
            },
           icon: 'link'
          });
    
        }
      }, []);

      
}

export default UseCommandBar
import firstImg from './firstimg.svg';
import firstMain from './firstmain.svg';
import secondMain from './secondmain.svg';
import thirdMain from './thirdmain.svg';
import secondImg from './secondimg.svg';
import thirdImg from './thirdimg.svg';

const blogs = [
  {
    id: '1',
    image: firstImg,
    mainImage: firstMain,
    imageDescription:
      'in front of a purple background, blonde woman sitting cross-legged and she is looking at her phone',
    mainTitle: 'mentalHealthTitle',
    summary: 'mentalHealthFirstText',
    subtitle: 'mentalHealthSecontTitle',
    article: 'mentalHealthSecondText',
    keywords: 'well-being',
  },
  {
    id: '2',
    mainImage: secondMain,
    image: secondImg,
    imageDescription: 'a woman trying to catch puzzle pieces',
    mainTitle: 'trauma',
    article:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar libero at ipsum tincidunt congue. Ut ornare tortor magna, in varius dui aliquet et. Proin cursus faucibus laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in posuere ex. Nullam eu consequat sapien. Quisque ultricies vehicula facilisis. Nulla volutpat eget massa vitae sagittis. Morbi pellentesque magna ut felis ornare rhoncus. Aliquam erat volutpat. Phasellus et diam in tortor egestas lacinia accumsan eu dolor. Curabitur volutpat neque ultrices, sagittis dui vel, sodales metus. Nulla risus lorem, vulputate et dapibus vel, condimentum porta quam. Maecenas id lorem id nibh tristique sodales. Aenean ullamcorper velit nec sapien convallis suscipit. Morbi eget justo laoreet, placerat mi sit amet, porta sapien. Integer efficitur mi purus, nec aliquet erat semper et. Duis lacinia neque at viverra porttitor. Aenean porttitor dapibus felis. Proin commodo fermentum odio, eget varius neque. Mauris varius sapien nec augue rutrum vulputate. Fusce vel mollis augue, quis posuere purus. Cras enim risus, posuere et augue sed, faucibus lacinia dolor. Integer vitae sollicitudin elit. Suspendisse fermentum scelerisque nibh vitae dignissim. Nam vestibulum tempor nibh, a blandit velit maximus vitae.',
    keywords: 'well-being',
  },
  {
    id: '3',
    mainImage: thirdMain,
    image: thirdImg,
    imageDescription:
      'a sad looking woman thinking and her speech baloon shows tangled things',
    mainTitle: 'tellMe',
    article:
      'Etiam elit purus, vulputate ac turpis sed, maximus auctor turpis. Aliquam erat volutpat. Ut pretium in nisi et dapibus. Mauris ac neque pretium, tincidunt odio vel, vehicula leo. Nunc tempor nulla velit, quis aliquet erat volutpat sit amet. Cras ac faucibus est. Sed tempus mollis elit ut vestibulum. Phasellus eu diam pretium, bibendum tellus vel, fermentum ipsum. Etiam aliquet mauris sed mi malesuada convallis. Donec aliquam dictum nisi quis pretium. Integer tempus, metus quis fringilla ullamcorper, leo est viverra neque, id semper ex purus ut velit. Praesent vitae quam luctus, egestas metus ac, elementum mi. Phasellus nec porttitor metus.',
    keywords: 'well-being',
  },
  {
    id: '4',
    mainImage: firstMain,
    image: secondImg,
    imageDescription: 'to be decided',
    mainTitle: 'LOREM IPSUM',
    article:
      'Etiam elit purus, vulputate ac turpis sed, maximus auctor turpis. Aliquam erat volutpat. Ut pretium in nisi et dapibus. Mauris ac neque pretium, tincidunt odio vel, vehicula leo. Nunc tempor nulla velit, quis aliquet erat volutpat sit amet. Cras ac faucibus est. Sed tempus mollis elit ut vestibulum. Phasellus eu diam pretium, bibendum tellus vel, fermentum ipsum. Etiam aliquet mauris sed mi malesuada convallis. Donec aliquam dictum nisi quis pretium. Integer tempus, metus quis fringilla ullamcorper, leo est viverra neque, id semper ex purus ut velit. Praesent vitae quam luctus, egestas metus ac, elementum mi. Phasellus nec porttitor metus.',
    keywords: 'anxiety',
  },
];

export { blogs };

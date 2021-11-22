export default (date: string) => `import { BlogLayout, CenterSection, LeftSection, RightSection, Section } from '@components/layout';
import Editor from '@components/editor';

export const meta = {
  title: 'Kitchen Sink Post',
  description: 'a full list of the everything a post can have.',
  date: '${date}',
  categories: ['test'],  
  published: true
}

export default ({ children }) => <BlogLayout meta={meta}>{children}</BlogLayout>;

<Section>

  <LeftSection size={4}>

  ## My Headline 

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus pellentesque dolor non egestas. In sed tristique elit. Cras vehicula, nisl vel ultricies gravida, augue nibh laoreet arcu, et tincidunt augue dui non elit. Vestibulum semper posuere magna, quis molestie mauris faucibus ut. Praesent ornare velit sit amet enim semper lacinia. Aenean nec sem lacus. Cras porta nunc nec leo lacinia sagittis. Aliquam ornare gravida cursus. Etiam ultrices massa quis erat scelerisque rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin lacinia sodales augue, non mattis ipsum pretium non. Morbi vehicula tempor blandit. Nam rhoncus, massa a maximus imperdiet, tortor risus aliquet tortor, nec lacinia eros nisi volutpat massa. Maecenas ut augue ipsum.

  Sed vehicula libero pulvinar
  tincidunt ligula non, luctus massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas arcu purus, aliquam ac molestie ac, luctus eget sem. Sed pellentesque massa eros, condimentum commodo ligula cursus ut. Mauris sit amet molestie ipsum. Nullam venenatis est at purus mollis consectetur. Phasellus a ipsum a quam ullamcorper aliquet. Nunc gravida bibendum placerat.
  </LeftSection>

  <RightSection size={8}>

  ## My Headline

  <Editor code="console.log('yo')"/>
  
  </RightSection>

</Section>

<Section>
  
  <CenterSection>

  # Hey there this is my title

  lets add some plain text. this will just make sure that we are good to go.
  Sed vehicula libero pulvinar tincidunt ligula non, luctus massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas arcu purus, aliquam ac molestie ac, luctus eget sem. Sed pellentesque massa eros, condimentum commodo ligula cursus ut. Mauris sit amet molestie ipsum. Nullam venenatis est at purus mollis consectetur. Phasellus a ipsum a quam ullamcorper aliquet. Nunc gravida bibendum placerat.
  
  </CenterSection>

</Section>

<Section>

  <LeftSection size={4}>

  # Hey there New Section

  </LeftSection>

</Section>
`;
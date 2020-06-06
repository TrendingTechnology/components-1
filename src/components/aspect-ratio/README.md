The AspectRatio component maintains a fluid-width aspect ratio for a UI element.

```jsx harmony
import { ThemeProvider, AspectRatio, Text } from '@lapidist/components';

<div style={{ border: '1px solid black', padding: '20px', width: '50%', margin: '0 auto' }}>
    <ThemeProvider>
        <AspectRatio ratio={'1/1'}>
            <Text>
                Nunc porttitor lectus ex, eu pharetra elit placerat non. Suspendisse nec ultrices augue, et varius velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi sollicitudin sed turpis et vulputate. Nam consequat porttitor scelerisque. Nulla ultricies enim at eros accumsan interdum. Aenean egestas enim mi, nec tincidunt libero gravida et.
            </Text>
        </AspectRatio>
    </ThemeProvider>
</div>
```

You can also use object notation to specify the aspect ratio of the element. It also works well to constrain images.

```jsx harmony
import { ThemeProvider, AspectRatio, Image } from '@lapidist/components';

<ThemeProvider>
    <AspectRatio ratio={{ x: 16, y: 9 }}>
        <Image src="cat.jpg" alt="A pretty cat" />
    </AspectRatio>
</ThemeProvider>
```
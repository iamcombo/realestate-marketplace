import {
  createStyles,
  Card,
  Image,
  Group,
  Text,
  Avatar,
  rem,
  ThemeIcon,
  Flex,
} from '@mantine/core';
import { useIsClient } from '@/hooks';
import { generateAddress } from '@/utils';
import { IconBoxModel2, IconBed, IconBath, IconMapPinFilled } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  card: {
    // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  footer: {
    padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));

interface ArticleCardFooterProps {
  image: string;
  category: string;
  title: string;
  footer: string;
  author: {
    name: string;
    description: string;
    image: string;
  };
}

const CardItem = ({
  image,
  category,
  title,
  footer,
  author,
}: ArticleCardFooterProps) => {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder padding="lg" radius={16} shadow='sm' className={classes.card}>
      <Card.Section mb="sm">
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Text fw={700} mt="xs" truncate>{title}</Text>
      <Flex mb={8}>
        <IconMapPinFilled size={14} />
        <Text c='dimmed' ml={4} fz={10}>{useIsClient() && generateAddress()}</Text>
      </Flex>

      <Group mt="lg" position='apart'>
        <Group spacing={8}>
          <Avatar size='sm' src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80' radius="xl" />
          <div>
            <Text fw={500} fz={12}>{author.name}</Text>
            <Text fz="xs" c="dimmed">
              {author.description}
            </Text>
          </div>
        </Group>
        <Text fw={600} color={theme.primaryColor}>$2,500,000 USD</Text>
      </Group>

      <Card.Section className={classes.footer}>
        {/* <Group position="apart">
          <Text fz="xs" c="dimmed">
            {footer}
          </Text>
          <Group spacing={0}>
            <ActionIcon>
              <IconHeart size="1.2rem" color={theme.colors.red[6]} stroke={1.5} />
            </ActionIcon>
            <ActionIcon>
              <IconBookmark size="1.2rem" color={theme.colors.yellow[6]} stroke={1.5} />
            </ActionIcon>
            <ActionIcon>
              <IconShare size="1.2rem" color={theme.colors.blue[6]} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group> */}
        <Group position='apart'>
          <div>
            <Group spacing={4}>
              <ThemeIcon variant='light'>
                <IconBoxModel2 color={theme.primaryColor} size="1.2rem" stroke={1.5} />
              </ThemeIcon>
              <Text fz={10} fw={500}>678 m²</Text>
            </Group>
            <Text fz={10} fw={600} c='dimmed'>Living room</Text>
          </div>
          <div>
            <Group spacing={4}>
              <ThemeIcon variant='light'>
                <IconBed color={theme.primaryColor} size="1.2rem" stroke={1.5} />
              </ThemeIcon>
              <Text fz={10} fw={500}>3 room</Text>
            </Group>
            <Text fz={10} fw={600} c='dimmed'>Bed room</Text>
          </div>
          <div>
            <Group spacing={4}>
              <ThemeIcon variant='light'>
                <IconBath color={theme.primaryColor} size="1.2rem" stroke={1.5} />
              </ThemeIcon>
              <Text fz={10} fw={500}>2 room</Text>
            </Group>
            <Text fz={10} fw={600} c='dimmed'>Bath room</Text>
          </div>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default CardItem;
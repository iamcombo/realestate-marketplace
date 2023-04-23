import {
  createStyles,
  Card,
  Image,
  ActionIcon,
  Group,
  Text,
  Avatar,
  Badge,
  rem,
} from '@mantine/core';
import { IconHeart, IconBookmark, IconShare, IconBoxModel2, IconBed, IconBath } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
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

export const CardItem = ({
  image,
  category,
  title,
  footer,
  author,
}: ArticleCardFooterProps) => {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder padding="lg" radius="md" className={classes.card}>
      <Card.Section mb="sm">
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Group>
        {/* <Badge>{category}</Badge> */}
        <div>
          <Group spacing={0}>
            <ActionIcon>
              <IconBoxModel2 color={theme.primaryColor} size="1.2rem" stroke={1.5} />
            </ActionIcon>
            <Text fz={10} fw={500}>678 m²</Text>
          </Group>
          <Text fz={10}>Living room</Text>
        </div>
        <div>
          <Group spacing={0}>
            <ActionIcon>
              <IconBed color={theme.primaryColor} size="1.2rem" stroke={1.5} />
            </ActionIcon>
            <Text fz={10} fw={500}>3 room</Text>
          </Group>
          <Text fz={10}>Bed room</Text>
        </div>
        <div>
          <Group spacing={0}>
            <ActionIcon>
              <IconBath color={theme.primaryColor} size="1.2rem" stroke={1.5} />
            </ActionIcon>
            <Text fz={10} fw={500}>2 room</Text>
          </Group>
          <Text fz={10}>Bath room</Text>
        </div>
      </Group>

      <Text fw={700} className={classes.title} mt="xs" truncate>
        {title}
      </Text>

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
        <Text fw={600}>$2,500,000 USD</Text>
      </Group>

      <Card.Section className={classes.footer}>
        <Group position="apart">
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
        </Group>
      </Card.Section>
    </Card>
  );
};
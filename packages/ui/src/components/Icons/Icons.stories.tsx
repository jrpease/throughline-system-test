import type { Meta, StoryObj } from "@storybook/react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  X,
  Check,
  Plus,
  Minus,
  Search,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Settings,
  SlidersHorizontal,
  Pencil,
  Trash2,
  Copy,
  Download,
  Upload,
  Share2,
  Filter,
  RefreshCw,
  ExternalLink,
  Info,
  CircleAlert,
  TriangleAlert,
  CircleCheck,
  CircleX,
  CircleHelp,
  LoaderCircle,
  Bell,
  User,
  Users,
  LogIn,
  LogOut,
  Lock,
  Eye,
  EyeOff,
  House,
  Calendar,
  Clock,
  Mail,
  Star,
  Bookmark,
  Folder,
  Link,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Repeat1,
  Volume1,
  Volume2,
  VolumeX,
  Heart,
  Mic,
  Music,
  List,
  Headphones,
  Disc,
} from "lucide-react";

type IconEntry = { name: string; Icon: LucideIcon };

const icons: IconEntry[] = [
  { name: "arrow-up", Icon: ArrowUp },
  { name: "arrow-down", Icon: ArrowDown },
  { name: "arrow-left", Icon: ArrowLeft },
  { name: "arrow-right", Icon: ArrowRight },
  { name: "chevron-up", Icon: ChevronUp },
  { name: "chevron-down", Icon: ChevronDown },
  { name: "chevron-left", Icon: ChevronLeft },
  { name: "chevron-right", Icon: ChevronRight },
  { name: "chevrons-left", Icon: ChevronsLeft },
  { name: "chevrons-right", Icon: ChevronsRight },
  { name: "x", Icon: X },
  { name: "check", Icon: Check },
  { name: "plus", Icon: Plus },
  { name: "minus", Icon: Minus },
  { name: "search", Icon: Search },
  { name: "menu", Icon: Menu },
  { name: "more-horizontal", Icon: MoreHorizontal },
  { name: "more-vertical", Icon: MoreVertical },
  { name: "settings", Icon: Settings },
  { name: "sliders-horizontal", Icon: SlidersHorizontal },
  { name: "pencil", Icon: Pencil },
  { name: "trash-2", Icon: Trash2 },
  { name: "copy", Icon: Copy },
  { name: "download", Icon: Download },
  { name: "upload", Icon: Upload },
  { name: "share-2", Icon: Share2 },
  { name: "filter", Icon: Filter },
  { name: "refresh-cw", Icon: RefreshCw },
  { name: "external-link", Icon: ExternalLink },
  { name: "info", Icon: Info },
  { name: "circle-alert", Icon: CircleAlert },
  { name: "triangle-alert", Icon: TriangleAlert },
  { name: "circle-check", Icon: CircleCheck },
  { name: "circle-x", Icon: CircleX },
  { name: "circle-help", Icon: CircleHelp },
  { name: "loader-circle", Icon: LoaderCircle },
  { name: "bell", Icon: Bell },
  { name: "user", Icon: User },
  { name: "users", Icon: Users },
  { name: "log-in", Icon: LogIn },
  { name: "log-out", Icon: LogOut },
  { name: "lock", Icon: Lock },
  { name: "eye", Icon: Eye },
  { name: "eye-off", Icon: EyeOff },
  { name: "house", Icon: House },
  { name: "calendar", Icon: Calendar },
  { name: "clock", Icon: Clock },
  { name: "mail", Icon: Mail },
  { name: "star", Icon: Star },
  { name: "bookmark", Icon: Bookmark },
  { name: "folder", Icon: Folder },
  { name: "link", Icon: Link },
  { name: "play", Icon: Play },
  { name: "pause", Icon: Pause },
  { name: "skip-back", Icon: SkipBack },
  { name: "skip-forward", Icon: SkipForward },
  { name: "shuffle", Icon: Shuffle },
  { name: "repeat", Icon: Repeat },
  { name: "repeat-1", Icon: Repeat1 },
  { name: "volume-1", Icon: Volume1 },
  { name: "volume-2", Icon: Volume2 },
  { name: "volume-x", Icon: VolumeX },
  { name: "heart", Icon: Heart },
  { name: "mic", Icon: Mic },
  { name: "music", Icon: Music },
  { name: "list", Icon: List },
  { name: "headphones", Icon: Headphones },
  { name: "disc", Icon: Disc },
];

const meta = {
  title: "Foundations/Icons",
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gallery: Story = {
  render: () => (
    <div>
      <p
        style={{
          fontSize: 12,
          color: "var(--color-text-secondary)",
          marginBottom: 16,
        }}
      >
        {icons.length} Lucide icons · import from lucide-react
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(96px, 1fr))",
          gap: 16,
        }}
      >
        {icons.map(({ name, Icon }) => (
          <div
            key={name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: 12,
            }}
          >
            <Icon size={24} color="var(--color-text-primary)" />
            <span
              style={{
                fontSize: 10,
                color: "var(--color-text-secondary)",
                textAlign: "center",
                wordBreak: "break-word",
              }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
};

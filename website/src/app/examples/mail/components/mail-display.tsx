import * as React from "react";
import { css } from "@pigment-css/react";
import {
  AlertCircleIcon,
  BanIcon,
  ForwardIcon,
  MailIcon,
  ReplyAllIcon,
  ReplyIcon,
  Trash2Icon,
} from "lucide-react";
import { format } from "date-fns";

import { Avatar, AvatarFallback } from "@/src/components/ui/avatar";
import { Button } from "@/src/components/ui/button";
import { IconButton } from "@/src/components/ui/icon-button";
import { Stack } from "@/src/components/ui/stack";
import { Switch } from "@/src/components/ui/switch";
import { Text } from "@/src/components/ui/text";
import { Textarea } from "@/src/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipPositioner,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";
import type { Mail } from "@/src/app/examples/mail/data";

export interface MailDisplayProps {
  mail: Mail | null;
}

export function MailDisplay({ mail }: MailDisplayProps): React.JSX.Element {
  if (!mail) {
    return <div>No mail selected</div>;
  }

  return (
    <div
      className={css({
        boxSizing: "border-box",
        paddingBlock: "calc(var(--size-unit) * 4)",
        paddingInline: "calc(var(--size-unit) * 6)",
      })}
    >
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
        })}
      >
        <Stack direction="row" gap={1}>
          <Tooltip>
            <TooltipProvider>
              <TooltipTrigger
                render={
                  <IconButton size="sm" variant="ghost">
                    <ReplyIcon />
                  </IconButton>
                }
              />
              <TooltipPositioner side="top" sideOffset={4}>
                <TooltipContent>Reply</TooltipContent>
              </TooltipPositioner>
            </TooltipProvider>
          </Tooltip>
          <Tooltip>
            <TooltipProvider>
              <TooltipTrigger
                render={
                  <IconButton size="sm" variant="ghost">
                    <ReplyAllIcon />
                  </IconButton>
                }
              />
              <TooltipPositioner side="top" sideOffset={4}>
                <TooltipContent>Reply all</TooltipContent>
              </TooltipPositioner>
            </TooltipProvider>
          </Tooltip>
          <Tooltip>
            <TooltipProvider>
              <TooltipTrigger
                render={
                  <IconButton size="sm" variant="ghost">
                    <ForwardIcon />
                  </IconButton>
                }
              />
              <TooltipPositioner side="top" sideOffset={4}>
                <TooltipContent>Forward</TooltipContent>
              </TooltipPositioner>
            </TooltipProvider>
          </Tooltip>
        </Stack>
        <Stack direction="row" gap={1}>
          <Tooltip>
            <TooltipProvider>
              <TooltipTrigger
                render={
                  <IconButton size="sm" variant="ghost">
                    <MailIcon />
                  </IconButton>
                }
              />
              <TooltipPositioner side="top" sideOffset={4}>
                <TooltipContent>Mark as read</TooltipContent>
              </TooltipPositioner>
            </TooltipProvider>
          </Tooltip>
          <Tooltip>
            <TooltipProvider>
              <TooltipTrigger
                render={
                  <IconButton size="sm" variant="ghost">
                    <Trash2Icon />
                  </IconButton>
                }
              />
              <TooltipPositioner side="top" sideOffset={4}>
                <TooltipContent>Delete</TooltipContent>
              </TooltipPositioner>
            </TooltipProvider>
          </Tooltip>
          <Tooltip>
            <TooltipProvider>
              <TooltipTrigger
                render={
                  <IconButton size="sm" variant="ghost">
                    <BanIcon />
                  </IconButton>
                }
              />
              <TooltipPositioner side="top" sideOffset={4}>
                <TooltipContent>Mark as spam</TooltipContent>
              </TooltipPositioner>
            </TooltipProvider>
          </Tooltip>
        </Stack>
      </div>
      <div
        className={css({
          paddingBlock: "calc(var(--size-unit) * 4)",
        })}
      >
        <Text size="3xl" weight="medium">
          {mail.subject}
        </Text>
      </div>
      <div
        className={css({
          border: "1px solid hsl(var(--color-border))",
          borderRadius: "var(--borderRadius-md)",
          boxShadow: "var(--shadow-sm)",
        })}
      >
        <div
          className={css({
            display: "flex",
            justifyContent: "space-between",
            padding: "calc(var(--size-unit) * 6)",
          })}
        >
          <Stack direction="row" gap={2}>
            <Avatar>
              <AvatarFallback>
                {mail.name
                  .split(" ")
                  .map((chunk) => chunk[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <Text size="sm" weight="medium">
                {mail.name}{" "}
                <Text as="span" size="sm" weight="regular">
                  {`<${mail.email}>`}
                </Text>
              </Text>
              <Text className={css({ color: "hsl(var(--color-mutedForeground))" })} size="xs">
                To: {mail.email}
              </Text>
            </div>
          </Stack>
          {mail.date ? (
            <Text className={css({ color: "hsl(var(--color-mutedForeground)))" })} size="xs">
              {format(new Date(mail.date), "PPpp")}
            </Text>
          ) : null}
        </div>
        <div
          className={css({
            borderBottom: "1px dashed hsl(var(--color-border))",
            borderTop: "1px dashed hsl(var(--color-border))",
            paddingBlock: "calc(var(--size-unit) * 4)",
            paddingInline: "calc(var(--size-unit) * 6)",
          })}
        >
          <Text className={css({ whiteSpace: "pre-wrap" })} size="sm">
            {mail.text}
          </Text>
        </div>
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "calc(var(--spacing-unit) * 2)",
            paddingBlockStart: "calc(var(--size-unit) * 4)",
            paddingBlockEnd: "calc(var(--size-unit) * 2)",
            paddingInline: "calc(var(--size-unit) * 6)",
          })}
        >
          <Textarea
            className={css({
              minHeight: "calc(var(--size-unit) * 16)",
              height: "calc(var(--size-unit) * 16)",
              maxWidth: "var(--size-full)",
            })}
            placeholder="Write your reply..."
          />
          <div
            className={css({
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
            })}
          >
            <Stack direction="row" gap={1}>
              <Button size="sm" variant="ghost">
                <ReplyIcon />
                Reply
              </Button>
              <Button size="sm" variant="ghost">
                <ReplyAllIcon />
                Reply all
              </Button>
            </Stack>
            <div>
              <Stack alignItems="center" direction="row" gap={2}>
                <Switch />
                <Stack alignItems="center" direction="row" gap={1}>
                  <Text size="sm" weight="medium">
                    Schedule sending
                  </Text>
                  <AlertCircleIcon color="hsl(var(--color-mutedForeground))" size={16} />
                </Stack>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

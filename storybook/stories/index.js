import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import CKEditor from "./CKEditor";
import CenterView from "./CenterView";

storiesOf("CKEditor", module).add("with text", () => <CKEditor />);

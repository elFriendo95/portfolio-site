import { Button } from "antd";
import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
export function BtnGroup() {
  return (
    <div className="flex">
      <Button type="link" shape="circle" icon={<MailOutlined />} />
      <Button type="link" shape="circle" icon={<GithubOutlined />} />
      <Button type="link" shape="circle" icon={<LinkedinOutlined />} />
    </div>
  );
}

export interface MenuItem {
  // 图标
  icon?: string;
  // 网站名称
  name: string;
  // 网站链接
  url?: string;
  // 子级菜单
  children?: MenuItem[];
  // 网站描述
  desc?: string;
}

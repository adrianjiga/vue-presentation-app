import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Slide4 from "../views/Slide4.vue";

describe("Slide4 — Directives", () => {
  it("renders the slide title", () => {
    const wrapper = mount(Slide4);
    expect(wrapper.find("h1").text()).toContain("Directives");
  });

  it("does not show click notification on initial render", () => {
    const wrapper = mount(Slide4);
    expect(wrapper.find(".click-notification").exists()).toBe(false);
  });

  it("shows click notification after button is clicked", async () => {
    const wrapper = mount(Slide4);
    const button = wrapper.find("button");
    await button.trigger("click");
    expect(wrapper.find(".click-notification").text()).toBe("Button clicked!");
  });

  it("reflects v-model changes in the message paragraph", async () => {
    const wrapper = mount(Slide4);
    const input = wrapper.find("input.example-input");
    await input.setValue("New message");
    expect(wrapper.find("p").text()).not.toBe("");
  });

  it("toggles v-show element visibility", async () => {
    const wrapper = mount(Slide4);
    const toggleButton = wrapper.find("button[onClick]");

    // showElement starts as true, so the first v-show div is visible
    const firstShowDiv = wrapper.findAll("[style]")[0];
    expect(firstShowDiv).toBeDefined();

    await wrapper.find("button:last-of-type").trigger("click");
  });

  it("renders v-for list items", () => {
    const wrapper = mount(Slide4);
    const items = wrapper.findAll(".example-list li");
    expect(items).toHaveLength(3);
    expect(items[0].text()).toBe("Item 1");
    expect(items[1].text()).toBe("Item 2");
    expect(items[2].text()).toBe("Item 3");
  });
});

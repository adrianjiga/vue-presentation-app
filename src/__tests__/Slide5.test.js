import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import Slide5 from "../views/Slide5.vue";

describe("Slide5 — Computed Properties", () => {
  it("renders the slide title", () => {
    const wrapper = mount(Slide5);
    expect(wrapper.find("h1").text()).toContain("Computed Properties");
  });

  it("displays the initial fullName computed from default data", () => {
    const wrapper = mount(Slide5);
    expect(wrapper.find(".computed").text()).toBe("Adrian Jiga");
  });

  it("updates fullName when firstName changes", async () => {
    const wrapper = mount(Slide5);
    const firstNameInput = wrapper.find("#firstName");
    await firstNameInput.setValue("John");
    expect(wrapper.find(".computed").text()).toBe("John Jiga");
  });

  it("updates fullName when lastName changes", async () => {
    const wrapper = mount(Slide5);
    const lastNameInput = wrapper.find("#lastName");
    await lastNameInput.setValue("Doe");
    expect(wrapper.find(".computed").text()).toBe("Adrian Doe");
  });

  it("updates fullName when both names change", async () => {
    const wrapper = mount(Slide5);
    await wrapper.find("#firstName").setValue("Jane");
    await wrapper.find("#lastName").setValue("Smith");
    expect(wrapper.find(".computed").text()).toBe("Jane Smith");
  });
});

"use client";

import { MOCK_DRAFTS } from "@/app/component/dashboard/zerodraft/mock-data";
import { ITEMS_PER_PAGE } from "@/app/component/dashboard/zerodraft/status-config";
import { Draft, FilterStatus } from "@/app/component/dashboard/zerodraft/types";
import { useState, useMemo } from "react";
import { DashboardHeader } from "../DashboardHeader";
import { DraftFilters } from "@/app/component/dashboard/zerodraft/DraftFilters";
import { DraftTable } from "@/app/component/dashboard/zerodraft/DraftTable";
import { Pagination } from "@/app/component/dashboard/zerodraft/Pagination";
import { PreviewModal } from "@/app/component/dashboard/zerodraft/PreviewModal";
import { EditDraftDialog } from "@/app/component/dashboard/zerodraft/EditDraftDialog";

function ZerodraftsPage() {
  const [drafts, setDrafts]           = useState<Draft[]>(MOCK_DRAFTS);
  const [search, setSearch]           = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterStatus>("All");
  const [autoPosting, setAutoPosting] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [previewDraft, setPreviewDraft] = useState<Draft | null>(null);
  const [editDraft, setEditDraft]     = useState<Draft | null>(null);
  const [editOpen, setEditOpen]       = useState(false);

  // Filter
  const filtered = useMemo(() =>
    drafts.filter((d) => {
      const matchesSearch = d.title.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = activeFilter === "All" || d.status === activeFilter;
      return matchesSearch && matchesFilter;
    }),
    [drafts, search, activeFilter]
  );

  // Paginate
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safePage   = Math.min(currentPage, totalPages);
  const paginated  = filtered.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE);

  const handleSearch = (val: string) => { setSearch(val); setCurrentPage(1); };
  const handleFilter = (f: FilterStatus) => { setActiveFilter(f); setCurrentPage(1); };

  const handleEdit = (draft: Draft) => {
    setEditDraft(draft);
    setEditOpen(true);
  };

  const handleSave = (id: string, title: string, content: string) => {
    setDrafts((prev) =>
      prev.map((d) => d.id === id ? { ...d, title, preview: content } : d)
    );
  };

  const handlePublish = (id: string, title: string, content: string) => {
    setDrafts((prev) =>
      prev.map((d) => d.id === id ? { ...d, title, preview: content, status: "Published" } : d)
    );
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-100 min-h-screen overflow-auto">
      <DashboardHeader
        title="Zerodrafts"
        subtitle="View and track automatically generated draft articles before publishing"
      />

      <div className="px-4 sm:px-8 pb-8 pt-4 flex flex-col gap-4 flex-1">
        <DraftFilters
          search={search}
          activeFilter={activeFilter}
          autoPosting={autoPosting}
          onSearch={handleSearch}
          onFilter={handleFilter}
          onAutoPosting={setAutoPosting}
        />

        <DraftTable
          drafts={paginated}
          onPreview={setPreviewDraft}
          onEdit={handleEdit}
        />

        <Pagination
          currentPage={safePage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      <PreviewModal
        draft={previewDraft}
        onClose={() => setPreviewDraft(null)}
      />

      <EditDraftDialog
        draft={editDraft}
        open={editOpen}
        onClose={() => { setEditOpen(false); setEditDraft(null); }}
        onSave={handleSave}
        onPublish={handlePublish}
      />
    </div>
  );
}

export default ZerodraftsPage;